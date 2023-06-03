import IController from "@/controllers/IController";
import {Project} from "@/models/Project";
import {execute} from "@/databases/postgesql/db-connection";
import {ControllerFetcher} from "@/lib/fetcher";

// eslint-disable-next-line import/no-anonymous-default-export
export default new class ProjectController implements IController<Project> {
    Delete(params: object): Promise<boolean> {
        return Promise.resolve(false);
    }

    GetAll({ userid, statusid }: object | null): Promise<object> {
        if (userid && statusid) {
            const text = `
                SELECT p.userid, pr.*, CASE
                    WHEN p.userid = $1 THEN u.name
                    END as userStatus
                FROM projects as pr
                LEFT JOIN Membership p on pr.id = p.projectid
                LEFT JOIN "userStatuses" u on u.id = p."userStatusid"
                ${statusid ? "WHERE p.userid = $1 AND u.id = $2" : ''};
             `

            const values = statusid ? [userid, statusid] : [userid];

            return execute({text, values}, ControllerFetcher("array"))
        }

        return execute("SELECT * FROM projects", ControllerFetcher("array"));
    }

    GetOne(params: object): Promise<object | null> {
        if (params.id) {
            return execute({text: "SELECT * FROM projects WHERE id = $1", values: [params.id]}, ControllerFetcher("one"))
        }

        return Promise.resolve(null);
    }

    Insert(object: Project): Promise<object> {
        if (object.adminid) {
            return execute({text: "SELECT create_project($1)", values: [object.adminid]}, (res => res.rows[0] ? { projectId: res.rows[0].create_project } : { projectId: null}))
        }

        return Promise.resolve({ projectId: null });
    }

    Update(id: number, object: Project): Promise<boolean> {
        if (object) {

            let temp = [];
            const values = [];

            let i = 1;
            for (let k in object) {
                if (object[k] && k !== "id") {
                    values.push(object[k]);
                    temp.push(`${k} = $${i}`);
                    i++;
                }
            }

            if (temp.length) {
                const text = `
                UPDATE projects SET ${temp.join(', ')} WHERE id = $${temp.length + 1} RETURNING *;
            `
                return execute({text, values}, ControllerFetcher("bool"))
            }
        }

        return Promise.resolve(false);
    }
}
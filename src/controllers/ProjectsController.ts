import {IController} from "@/controllers/IController";
import {Project} from "@/models/Project";
import {pool} from "@/databases/postgesql/db-connection";
import {QueryConfig} from "pg";
import {User} from "@/models/User";

class ProjectsController implements IController<Project> {
    delete(id: number): Promise<boolean> {
        return Promise.resolve(false);
    }

    getAll() {
        return pool
            .query("SELECT * FROM projects")
            .then(data => data.rows.map(el => Project.Parse(el)))
    }

    getById(id: number): Promise<Project> {
        const text = "SELECT * FROM projects WHERE id = $1";
        return pool
                    .query({text, values: [id]})
                    .then(data => Project.Parse(data.rows[0]))
    }

    insert(object: Project): Promise<Project> {
        const keys = Object.keys(object);

        const props = keys.join(", ");
        const values = keys.map(key => object[key]);

        //todo написать sql-функцию
        const text = `
            INSERT INTO projects (${props}) 
            VALUES(${values.map((el, idx) => `$${idx+1}`)}) 
            RETURNING *
        `;

        const config: QueryConfig = {text, values};

        return pool.query(config).then(data => User.Parse(data.rows[0]));
    }

    update(id: number, object: Project): Promise<Project> {
        return Promise.resolve(undefined);
    }

    getAllByUserId(id: number, statusid: number = null): Promise<object[]> {

        const text = `
            SELECT pr.*, p.userid, CASE
                WHEN userid = $1 THEN u.name
                END as userStatus
            FROM projects as pr
            LEFT JOIN projectmembership p on pr.id = p.projectid
            LEFT JOIN "userStatuses" u on u.id = p."userStatusid"
            ${statusid ? "WHERE u.id = $2" : ''}`;

        const values = statusid ? [id, statusid] : [id];
        return pool
                    .query({text, values})
                    .then(data => data.rows);
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ProjectsController();
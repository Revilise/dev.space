import {IController} from "@/controllers/IController";
import {Project} from "@/models/Project";
import {pool} from "@/databases/postgesql/db-connection";
import {QueryConfig} from "pg";
import {User} from "@/models/User";
import {query} from "express";

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

        //todo написать sql-функцию или триггер
        const text = `
            INSERT INTO projects (${props}) 
            VALUES(${values.map((el, idx) => `$${idx+1}`)}) 
            RETURNING *
        `;

        const config: QueryConfig = {text, values};

        return pool
                .query(config)
                .then(data => User.Parse(data.rows[0]));
    }

    update(id: number, object: Project): Promise<boolean> {
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

            return pool
                .query({text, values: [...values, id]})
                .then(res => res.rowCount > 0)
        }

        return Promise.resolve(false);
    }
    create(userid: number) {
        const text = "SELECT create_project($1)"
        return pool
            .query({text, values: [userid]})
            .then(data => data.rows[0] ? { projectId: data.rows[0].create_project } : { projectId: null})
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
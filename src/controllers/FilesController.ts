import {IController} from "@/controllers/IController";
import {File} from "@/models/File";
import {pool} from "@/databases/postgesql/db-connection";
import {QueryConfig} from "pg";
import projectId from "@/pages/api/files/get/[...projectId]";

class FilesController implements IController<File> {
    delete(id: number, userid: number): Promise<boolean> {

        const text = `
                DELETE FROM files as f
                USING projectmembership as pm
                WHERE f.projectid = pm.projectid
                    AND f.id = $1 AND pm.userid = $2; 
        `

        return pool
                .query({text, values: [id, userid] })
                .then(res => res.rowCount > 0)
    }

    getAll(): Promise<File[]> {
        return Promise.resolve([]);
    }

    getById(id: number): Promise<File> {
        return Promise.resolve(undefined);
    }

    getAllByProjectId(projectId: number): Promise<File[]> {
        const text = `
            SELECT * FROM files WHERE projectid = $1;
        `;

        return pool
            .query({text, values: [projectId]})
            .then(data => data.rows.map(el => File.Parse(el)));
    }

    insert(object: File): Promise<object> {
        const {name, type, projectid, size, data} = object;

        const text = `INSERT INTO Files (name, type, size, projectid, data) VALUES($1, $2, $3, $4, $5::bytea) RETURNING *`;
        const values = [name, type, size, projectid, data];

        const config: QueryConfig = {text, values};
        return pool.query(config).then(data => data.rows[0]);
    }

    update(id: number, object: File): Promise<File> {
        return Promise.resolve(undefined);
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new FilesController();
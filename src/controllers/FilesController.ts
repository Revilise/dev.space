import {IController} from "@/controllers/IController";
import {File} from "@/models/File";
import {pool} from "@/databases/postgesql/db-connection";
import {QueryConfig} from "pg";

class FilesController implements IController<File> {
    delete(id: number): Promise<boolean> {
        return Promise.resolve(false);
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

        const text = `INSERT INTO Files (data) VALUES($1::bytea) RETURNING *`;
        const values = [object.data];

        const config: QueryConfig = {text, values};
        return pool.query(config).then(data => data.rows);
    }

    update(id: number, object: File): Promise<File> {
        return Promise.resolve(undefined);
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new FilesController();
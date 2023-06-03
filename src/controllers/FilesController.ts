import IController from "@/controllers/IController";
import {execute} from "@/databases/postgesql/db-connection";
import {ControllerFetcher} from "@/lib/fetcher";
import {File} from "@/models/File"

// eslint-disable-next-line import/no-anonymous-default-export
export default new class FilesController implements IController<File> {
    Delete(params: object): Promise<boolean> {
        const {id, userid} = params;

        if (id && userid) {
            const text = `
                DELETE FROM files as f
                USING Membership as pm
                WHERE f.projectid = pm.projectid
                    AND f.id = $1 AND pm.userid = $2
                RETURNING *; 
            `
            return execute({text, values: [id, userid]}, ControllerFetcher("bool"))
        }

        return Promise.resolve(false);
    }

    GetAll(params: object): Promise<object> {
        const { projectid } = params;

        if (projectid) {
            return execute({text: "SELECT * FROM files WHERE projectid = $1;", values: [projectid]}, ControllerFetcher("array"))
        }

        return Promise.resolve([]);
    }

    GetOne(params: object | null): Promise<object | null> {
        return Promise.resolve(null);
    }

    Insert(object: File): Promise<object | null> {
        if (object) {
            const {name, type, projectid, size, data} = object;

            const text = `INSERT INTO Files (name, type, size, projectid, data) VALUES($1, $2, $3, $4, $5::bytea) RETURNING *`;
            const values = [name, type, size, projectid, data];

            return execute({text, values}, ControllerFetcher("one"))
        }

        return Promise.resolve(null);
    }

    Update(id: number, object: File): Promise<boolean> {
        return Promise.resolve(false);
    }
}
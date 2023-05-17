import {IController} from "@/controllers/IController";
import {Status} from "@/models/Status";
import {pool} from '@/databases/postgesql/db-connection';
import {QueryConfig} from "pg";

class StatusesController implements IController<Status> {
    delete(id: number): Promise<boolean> {
        const text = "DELETE FROM statuses WHERE id = $1";

        return pool.query({text, values: [id]}).then(data => true);
    }

    getAll(): Promise<Status[]> {
        return null;
    }

    getById(id: number): Promise<Status> {
        return Promise.resolve(undefined);
    }

    insert(object: Status): Promise<Status> {
        const keys = Object.keys(object);

        const props = keys.join(", ");
        const values = keys.map(key => object[key]);

        const text = `INSERT INTO statuses (${props}) VALUES(${values.map((el, idx) => `$${idx+1}`)}) RETURNING *`;

        const config: QueryConfig = {text, values};

        return pool.query(config).then(data => object);
    }

    update(id: number, object: Status): Promise<Status> {
        return Promise.resolve(undefined);
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new StatusesController();
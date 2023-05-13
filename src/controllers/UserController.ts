import {IController} from "@/controllers/IController";
import {User} from "@/models/User";
import {pool} from '@/databases/postgesql/db-connection';
import {QueryConfig} from "pg";

class UserController implements IController<User> {
    Delete(id: number): Promise<User> {
        return Promise.resolve(undefined);
    }

    Insert(object: User): Promise<User> {
        return Promise.resolve(undefined);
    }

    Update(id: number, object: User): Promise<User> {
        const keys = Object.keys(object);
        const props = keys
                        .map((prop, idx) => `${prop} = $${idx + 1}`)
                        .join(", ");

        const text = `UPDATE users SET ${props} WHERE id = ${id}`;
        const values = keys.map(key => object[key]);

        const config: QueryConfig = {text, values};
        return pool.query(config).then(data => object);
    }

    getAll(): Promise<User[]> {
        return pool.query("SELECT * FROM users").then(data => data.rows.map(row => User.Parse(row)));
    }

    getById(id: number): Promise<User[]> {
        return Promise.resolve([]);
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new UserController();
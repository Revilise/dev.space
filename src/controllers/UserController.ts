import IController from "@/controllers/IController";
import {User} from "@/models/User";
import {query} from "express";
import {execute} from "@/databases/postgesql/db-connection";
import {ControllerFetcher} from "@/lib/fetcher";
import {QueryConfig} from "pg";

// eslint-disable-next-line import/no-anonymous-default-export
export default new class UserController implements IController<User> {

    public Delete(params: object): Promise<boolean> {
        return Promise.resolve(false);
    }

    public GetAll(params: object | null): Promise<object[]> {
        return execute("SELECT * FROM users", ControllerFetcher("array"))
    }

    public GetOne({id = null, email = null, password = null}: object): Promise<object | null> {
        if (id) {
            return execute({text: "SELECT * FROM users WHERE id = $1", values: [id]}, ControllerFetcher("array"))
        }

        if (email && password) {
            const text = "SELECT id FROM users WHERE email = $1 AND password = SHA256($2)";
            const values = [email, password];

            return execute({text, values}, ControllerFetcher("one"))
        }

        return Promise.resolve({ok: false})
    }

    public Insert(object: User): Promise<object> {
        if (object) {
            const keys = Object.keys(object);

            const props = keys.join(", ");
            const values = keys.map(key => object[key]);

            const text = `INSERT INTO users (${props}) VALUES (${values.map((el, idx) => `$${idx+1}`)}) RETURNING *`;

            return execute({text, values}, ControllerFetcher("one"))
        }

        return Promise.resolve({ok: false});
    }

    public Update(id: number, object: User): Promise<boolean> {
        if (id && object && object.id === id) {
            const keys = Object.keys(object);
            const props = keys
                .map((prop, idx) => `${prop} = $${idx + 1}`)
                .join(", ");

            const text = `UPDATE users SET ${props} WHERE id = ${id} RETURNING *`;
            const values = keys.map(key => object[key]);
            return execute({text, values}, ControllerFetcher("one"))
        }

        return Promise.resolve(false);
    }
}
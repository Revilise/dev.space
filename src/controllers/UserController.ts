import {IController} from "@/controllers/IController";
import {User} from "@/models/User";
import {pool} from '@/databases/postgesql/db-connection';
import {QueryConfig} from "pg";

class UserController implements IController<User> {
    delete(id: number): Promise<boolean> {
        const text = "DELETE FROM users WHERE id = $1";

        return pool.query({text, values: [id]}).then(data => true);
    }

    insert(object: User): Promise<User> {
        const keys = Object.keys(object);

        const props = keys.join(", ");
        const values = keys.map(key => object[key]);

        const text = `INSERT INTO users (${props}) VALUES (${values.map((el, idx) => `$${idx+1}`)}) RETURNING *`;

        const config: QueryConfig = {text, values};

        return pool.query(config).then(data => User.Parse(data.rows[0]));
    }

    update(id: number, object: User): Promise<User> {
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

    getById(id: number): Promise<User> {
        return pool.query({text: "SELECT * FROM users WHERE id = $1", values: [id]}).then(data => {
            return data.rows.length ? User.Parse(data.rows[0]) : null;
        });
    }

    getByAuthData(email: string, password: string): Promise<User> {

        const text = "SELECT id FROM users WHERE email = $1 AND password = SHA256($2)";
        const values = [email, password];

        return pool
                .query({text, values})
                .then(data => data.rows[0])
                .then(row => this.getById(row?.id))
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new UserController();
import {IController} from "@/controllers/IController";
import {User} from "@/models/User";
import {pool} from '@/databases/postgesql/db-connection';

class UserController implements IController<User> {
    Delete(id: number): Promise<User> {
        return Promise.resolve(undefined);
    }

    Insert(object: User): Promise<User> {
        return Promise.resolve(undefined);
    }

    Update(id: number, object: User): Promise<User> {
        return Promise.resolve(undefined);
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
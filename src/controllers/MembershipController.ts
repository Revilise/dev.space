import IController from "@/controllers/IController";
import {Membership} from "@/models/Membership";
import {execute} from "@/databases/postgesql/db-connection";
import {ControllerFetcher} from "@/lib/fetcher";

// eslint-disable-next-line import/no-anonymous-default-export
export default new class MembershipController implements IController<Membership> {
    Delete(params: object): Promise<boolean> {
        const {id, userid, projectid} = params;

        if (id) {
            return execute({text: "DELETE FROM Membership WHERE id = $1 RETURNING *", values: [id]}, ControllerFetcher("bool"))
        }

        if (userid && projectid) {
            const text = "DELETE FROM Membership WHERE userid = $1 AND projectid = $2 RETURNING *";

            return execute({text, values: [userid, projectid]}, ControllerFetcher("bool"))
        }

        return Promise.resolve(false);
    }

    GetAll(params: object): Promise<object> {
        return Promise.resolve([]);
    }

    GetOne(params: object | null): Promise<object | null> {
        const {userid, projectid} = params;

        if (userid && projectid) {
            const text = `
                SELECT *, CASE
                    WHEN p.userid = $1 THEN u.name
                    END as userStatus
                FROM membership p
                INNER JOIN "userStatuses" u ON p."userStatusid" = u.id
                WHERE projectid = $2 AND userid = $1
            `
            return execute({text, values: [userid, projectid]}, ControllerFetcher("one"))
        }

        return Promise.resolve(null);
    }

    Insert(object: Membership): Promise<object | null> {
        const {userid, projectid} = object;

        if (userid && projectid) {
            const text = "INSERT INTO Membership (userid, projectid) VALUES($1, $2) RETURNING *";
            return execute({text, values: [userid, projectid]}, ControllerFetcher("one"));
        }

        return Promise.resolve(null);
    }

    Update(id: number, object: Membership): Promise<boolean> {
        if (id && object && object.id === id) {
            const keys = Object.keys(object);
            const props = keys
                .map((prop, idx) => `${prop} = $${idx + 1}`)
                .join(", ");

            const text = `UPDATE Membership SET ${props} WHERE id = ${id} RETURNING *`;
            const values = keys.map(key => object[key]);

            return execute({text, values}, ControllerFetcher("bool"))
        }

        return Promise.resolve(false);
    }

}
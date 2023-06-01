import {IController} from "@/controllers/IController";
import {Membership} from "@/models/Membership";
import {pool} from "@/databases/postgesql/db-connection";
import {QueryConfig} from "pg";

class MembershipController implements IController<Membership> {
    delete(id: number): Promise<boolean> {
        const text = "DELETE FROM Membership WHERE id = $1 RETURNING *";
        return pool
            .query({text, values: [id]})
            .then(() => true);
    }

    getAll(): Promise<Membership[]> {
        return pool
            .query("SELECT * FROM Membership")
            .then(data => data.rows.map(row => Membership.Parse(row)))
    }

    getById(id: number): Promise<Membership> {
        const text = "SELECT * FROM Membership WHERE id = $1"
        return pool
            .query({text, values: [id]})
            .then((data) => Membership.Parse(data.rows[0]))
    }

    insert(object: Membership): Promise<Membership> {
        const {userid, projectid} = object;

        const text = "INSERT INTO Membership (userid, projectid) VALUES($1, $2) RETURNING *";

        return pool
            .query({text, values: [userid, projectid]})
            .then((data) => Membership.Parse(data.rows[0]));
    }

    update(id: number, object: Membership): Promise<Membership> {
        const keys = Object.keys(object);
        const props = keys
            .map((prop, idx) => `${prop} = $${idx + 1}`)
            .join(", ");

        const text = `UPDATE Membership SET ${props} WHERE id = ${id}`;
        const values = keys.map(key => object[key]);

        const config: QueryConfig = {text, values};
        return pool.query(config).then(data => object);
    }

    getByUserAndProjectId(userId: number, projectId: number) {
        const text = `
            SELECT *, CASE
                WHEN p.userid = $1 THEN u.name
                END as userStatus
            FROM membership p
            INNER JOIN "userStatuses" u ON p."userStatusid" = u.id
            WHERE projectid = $2 AND userid = $1
        `

        return pool
            .query({text, values: [userId, projectId]})
            .then(res => res.rows[0])
    }

    deleteByUserAndProjectId(userId: number, projectId: number): Promise<object> {
        const text = `
            DELETE FROM Membership WHERE userid = $1 AND projectid = $2
        `;
        return pool
            .query({text, values: [userId, projectId]})
            .then(res => res.rows)
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new MembershipController();
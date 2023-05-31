import {IController} from "@/controllers/IController";
import {ProjectMembership} from "@/models/ProjectMembership";
import {pool} from "@/databases/postgesql/db-connection";
import {QueryConfig} from "pg";

class ProjectMembershipController implements IController<ProjectMembership> {
    delete(id: number): Promise<boolean> {
        const text = "DELETE FROM ProjectMembership WHERE id = $1 RETURNING *";
        return pool
            .query({text, values: [id]})
            .then(() => true);
    }

    getAll(): Promise<ProjectMembership[]> {
        return pool
            .query("SELECT * FROM ProjectMembership")
            .then(data => data.rows.map(row => ProjectMembership.Parse(row)))
    }

    getById(id: number): Promise<ProjectMembership> {
        const text = "SELECT * FROM ProjectMembership WHERE id = $1"
        return pool
            .query({text, values: [id]})
            .then((data) => ProjectMembership.Parse(data.rows[0]))
    }

    insert(object: ProjectMembership): Promise<ProjectMembership> {
        const {userid, projectid} = object;

        const text = "INSERT INTO ProjectMembership (userid, projectid) VALUES($1, $2) RETURNING *";

        return pool
            .query({text, values: [userid, projectid]})
            .then((data) => ProjectMembership.Parse(data.rows[0]));
    }

    update(id: number, object: ProjectMembership): Promise<ProjectMembership> {
        const keys = Object.keys(object);
        const props = keys
            .map((prop, idx) => `${prop} = $${idx + 1}`)
            .join(", ");

        const text = `UPDATE ProjectMembership SET ${props} WHERE id = ${id}`;
        const values = keys.map(key => object[key]);

        const config: QueryConfig = {text, values};
        return pool.query(config).then(data => object);
    }

    deleteByUserAndProjectId(userId: number, projectId: number): Promise<object> {
        const text = `
            DELETE FROM ProjectMembership WHERE userid = $1 AND projectid = $2
        `;
        return pool
            .query({text, values: [userId, projectId]})
            .then(res => res.rows)
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ProjectMembershipController();
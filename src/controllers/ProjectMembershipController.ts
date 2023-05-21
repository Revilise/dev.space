import {IController} from "@/controllers/IController";
import {ProjectMembership} from "@/models/ProjectMembership";
import {pool} from "@/databases/postgesql/db-connection";

class ProjectMembershipController implements IController<ProjectMembership> {
    delete(id: number): Promise<boolean> {
        return Promise.resolve(false);
    }

    getAll(): Promise<ProjectMembership[]> {
        return Promise.resolve([]);
    }

    getById(id: number): Promise<ProjectMembership> {
        return Promise.resolve(undefined);
    }

    insert(object: ProjectMembership): Promise<ProjectMembership> {
        const {userid, projectid} = object;

        const text = "INSERT INTO ProjectMembership (userid, projectid) VALUES($1, $2) RETURNING *";

        return pool
            .query({text, values: [userid, projectid]})
            .then((data) => ProjectMembership.Parse(data.rows[0]));
    }

    update(id: number, object: ProjectMembership): Promise<ProjectMembership> {
        return Promise.resolve(undefined);
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
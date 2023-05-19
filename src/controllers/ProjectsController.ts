import {IController} from "@/controllers/IController";
import {Project} from "@/models/Project";
import {pool} from "@/databases/postgesql/db-connection";

class ProjectsController implements IController<Project> {
    delete(id: number): Promise<boolean> {
        return Promise.resolve(false);
    }

    getAll(): Promise<Project[]> {
        return pool
                    .query("SELECT * FROM projects")
                    .then(data => data.rows.map(el => Project.Parse(el)))
    }

    getById(id: number): Promise<Project> {
        const text = "SELECT * FROM projects WHERE id = $1";
        return pool
                    .query({text, values: [id]})
                    .then(data => Project.Parse(data.rows[0]))
    }

    insert(object: Project): Promise<Project> {
        return Promise.resolve(undefined);
    }

    update(id: number, object: Project): Promise<Project> {
        return Promise.resolve(undefined);
    }
    getAllByUserId(id: number): Promise<Project[]> {
        const text = `
            SELECT * FROM projects as pr 
            INNER JOIN projectMembership as pm  
            ON pr.id = pm.projectid
            WHERE pm.userId = $1 AND pm.projectId = pr.id`;

        return pool
                    .query({text, values: [id]})
                    .then(data => data.rows.map(el => Project.Parse(el)));
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ProjectsController();
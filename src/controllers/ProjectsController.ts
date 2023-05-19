import {IController} from "@/controllers/IController";
import {Project} from "@/models/Project";
import {pool} from "@/databases/postgesql/db-connection";

class ProjectsController implements IController<Project> {
    delete(id: number): Promise<boolean> {
        return Promise.resolve(false);
    }

    getAll(): Promise<Project[]> {
        return Promise.resolve([]);
    }

    getById(id: number): Promise<Project> {
        return Promise.resolve(undefined);
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

        return pool.query({text, values: [id]}).then(data => data.rows.map(el => {
            return Project.Parse(el)
        }));
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ProjectsController();
import {IController} from "@/controllers/IController";
import {Project} from "@/models/Project";

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

}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ProjectsController();
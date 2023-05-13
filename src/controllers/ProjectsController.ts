import {IController} from "@/controllers/IController";
import {Project} from "@/models/Project";

class ProjectsController implements IController<Project> {
    Delete(id: number): Project {
        return undefined;
    }

    Insert(object: Project): Project {
        return undefined;
    }

    Update(id: number, object: Project): Project {
        return undefined;
    }

    getAll(): Project[] {
        return [];
    }

    getById(id: number): Project[] {
        return [];
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ProjectsController();
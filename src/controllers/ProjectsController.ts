import {IController} from "@/controllers/IController";
import {ProjectEntity} from "@/models/Project.entity";

class ProjectsController implements IController<ProjectEntity> {
    Delete(id: number): ProjectEntity {
        return undefined;
    }

    Insert(object: ProjectEntity): ProjectEntity {
        return undefined;
    }

    Update(id: number, object: ProjectEntity): ProjectEntity {
        return undefined;
    }

    getAll(): ProjectEntity[] {
        return [];
    }

    getById(id: number): ProjectEntity[] {
        return [];
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ProjectsController();
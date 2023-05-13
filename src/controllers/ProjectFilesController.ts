import {IController} from "@/controllers/IController";
import {ProjectFileEntity} from "@/models/ProjectFile.entity";

class ProjectFilesController implements IController<ProjectFileEntity> {
    Delete(id: number): ProjectFileEntity {
        return undefined;
    }

    Insert(object: ProjectFileEntity): ProjectFileEntity {
        return undefined;
    }

    Update(id: number, object: ProjectFileEntity): ProjectFileEntity {
        return undefined;
    }

    getAll(): ProjectFileEntity[] {
        return [];
    }

    getById(id: number): ProjectFileEntity[] {
        return [];
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ProjectFilesController();
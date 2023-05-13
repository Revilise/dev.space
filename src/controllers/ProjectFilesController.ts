import {IController} from "@/controllers/IController";
import {ProjectFile} from "@/models/ProjectFile";

class ProjectFilesController implements IController<ProjectFile> {
    Delete(id: number): ProjectFile {
        return undefined;
    }

    Insert(object: ProjectFile): ProjectFile {
        return undefined;
    }

    Update(id: number, object: ProjectFile): ProjectFile {
        return undefined;
    }

    getAll(): ProjectFile[] {
        return [];
    }

    getById(id: number): ProjectFile[] {
        return [];
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ProjectFilesController();
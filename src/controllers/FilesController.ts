import {IController} from "@/controllers/IController";
import {FileEntity} from "@/models/File.entity";

class FilesController implements IController<FileEntity> {
    Delete(id: number): FileEntity {
        return undefined;
    }

    Insert(object: FileEntity): FileEntity {
        return undefined;
    }

    Update(id: number, object: FileEntity): FileEntity {
        return undefined;
    }

    getAll(): FileEntity[] {
        return [];
    }

    getById(id: number): FileEntity[] {
        return [];
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new FilesController();
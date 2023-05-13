import {IController} from "@/controllers/IController";
import {File} from "@/models/File";

class FilesController implements IController<File> {
    Delete(id: number): File {
        return undefined;
    }

    Insert(object: File): File {
        return undefined;
    }

    Update(id: number, object: File): File {
        return undefined;
    }

    getAll(): File[] {
        return [];
    }

    getById(id: number): File[] {
        return [];
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new FilesController();
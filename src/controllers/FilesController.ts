import {IController} from "@/controllers/IController";
import {File} from "@/models/File";

class FilesController implements IController<File> {
    Delete(id: number): Promise<File> {
        return Promise.resolve(undefined);
    }

    Insert(object: File): Promise<File> {
        return Promise.resolve(undefined);
    }

    Update(id: number, object: File): Promise<File> {
        return Promise.resolve(undefined);
    }

    getAll(): Promise<File[]> {
        return Promise.resolve([]);
    }

    getById(id: number): Promise<File[]> {
        return Promise.resolve([]);
    }

}

// eslint-disable-next-line import/no-anonymous-default-export
export default new FilesController();
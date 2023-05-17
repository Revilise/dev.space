import {IController} from "@/controllers/IController";
import {File} from "@/models/File";

class FilesController implements IController<File> {
    delete(id: number): Promise<boolean> {
        return Promise.resolve(false);
    }

    getAll(): Promise<File[]> {
        return Promise.resolve([]);
    }

    getById(id: number): Promise<File> {
        return Promise.resolve(undefined);
    }

    insert(object: File): Promise<File> {
        return Promise.resolve(undefined);
    }

    update(id: number, object: File): Promise<File> {
        return Promise.resolve(undefined);
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new FilesController();
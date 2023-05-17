import {IController} from "@/controllers/IController";
import {Image} from "@/models/Image";

class ImagesController implements IController<Image> {
    delete(id: number): Promise<boolean> {
        return Promise.resolve(false);
    }

    getAll(): Promise<Image[]> {
        return Promise.resolve([]);
    }

    getById(id: number): Promise<Image> {
        return Promise.resolve(undefined);
    }

    insert(object: Image): Promise<Image> {
        return Promise.resolve(undefined);
    }

    update(id: number, object: Image): Promise<Image> {
        return Promise.resolve(undefined);
    }

}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ImagesController();
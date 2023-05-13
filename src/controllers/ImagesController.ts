import {IController} from "@/controllers/IController";
import {Image} from "@/models/Image";

class ImagesController implements IController<Image> {
    Delete(id: number): Image {
        return undefined;
    }

    Insert(object: Image): Image {
        return undefined;
    }

    Update(id: number, object: Image): Image {
        return undefined;
    }

    getAll(): Image[] {
        return [];
    }

    getById(id: number): Image[] {
        return [];
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ImagesController();
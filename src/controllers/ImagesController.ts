import {IController} from "@/controllers/IController";
import {ImageEntity} from "@/models/Image.entity";

class ImagesController implements IController<ImageEntity> {
    Delete(id: number): ImageEntity {
        return undefined;
    }

    Insert(object: ImageEntity): ImageEntity {
        return undefined;
    }

    Update(id: number, object: ImageEntity): ImageEntity {
        return undefined;
    }

    getAll(): ImageEntity[] {
        return [];
    }

    getById(id: number): ImageEntity[] {
        return [];
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ImagesController();
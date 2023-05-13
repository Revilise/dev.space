import {IController} from "@/controllers/IController";
import {StatusEntity} from "@/models/Status.entity";

class StatusesController implements IController<StatusEntity> {
    Delete(id: number): StatusEntity {
        return undefined;
    }

    Insert(object: StatusEntity): StatusEntity {
        return undefined;
    }

    Update(id: number, object: StatusEntity): StatusEntity {
        return undefined;
    }

    getAll(): StatusEntity[] {
        return [];
    }

    getById(id: number): StatusEntity[] {
        return [];
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new StatusesController();
import {IController} from "@/controllers/IController";
import {Status} from "@/models/Status";

class StatusesController implements IController<Status> {
    Delete(id: number): Status {
        return undefined;
    }

    Insert(object: Status): Status {
        return undefined;
    }

    Update(id: number, object: Status): Status {
        return undefined;
    }

    getAll(): Status[] {
        return [];
    }

    getById(id: number): Status[] {
        return [];
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new StatusesController();
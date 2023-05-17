import {IController} from "@/controllers/IController";
import {InviteRequest} from "@/models/InviteRequest";

class InviteRequestController implements IController<InviteRequest> {
    delete(id: number): Promise<boolean> {
        return Promise.resolve(false);
    }

    getAll(): Promise<InviteRequest[]> {
        return Promise.resolve([]);
    }

    getById(id: number): Promise<InviteRequest> {
        return Promise.resolve(undefined);
    }

    insert(object: InviteRequest): Promise<InviteRequest> {
        return Promise.resolve(undefined);
    }

    update(id: number, object: InviteRequest): Promise<InviteRequest> {
        return Promise.resolve(undefined);
    }

}

// eslint-disable-next-line import/no-anonymous-default-export
export default new InviteRequestController();
import {IController} from "@/controllers/IController";
import {InviteRequest} from "@/models/InviteRequest";

class InviteRequestController implements IController<InviteRequest> {
    Delete(id: number): InviteRequest {
        return undefined;
    }

    Insert(object: InviteRequest): InviteRequest {
        return undefined;
    }

    Update(id: number, object: InviteRequest): InviteRequest {
        return undefined;
    }

    getAll(): InviteRequest[] {
        return [];
    }

    getById(id: number): InviteRequest[] {
        return [];
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new InviteRequestController();
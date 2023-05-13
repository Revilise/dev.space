import {IController} from "@/controllers/IController";
import {InviteRequestEntity} from "@/models/InviteRequest.Entity";

class InviteRequestController implements IController<InviteRequestEntity> {
    Delete(id: number): InviteRequestEntity {
        return undefined;
    }

    Insert(object: InviteRequestEntity): InviteRequestEntity {
        return undefined;
    }

    Update(id: number, object: InviteRequestEntity): InviteRequestEntity {
        return undefined;
    }

    getAll(): InviteRequestEntity[] {
        return [];
    }

    getById(id: number): InviteRequestEntity[] {
        return [];
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new InviteRequestController();
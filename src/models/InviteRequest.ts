import {Entity} from "@/models/Entity";

export class InviteRequest extends Entity {
    constructor() {
        super();
    }

    projectId: number
    userId: number

    static Parse = (object) => super.Parse(object, InviteRequest);

    static Create = () => new InviteRequest();
}
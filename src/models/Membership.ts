import {Entity} from "@/models/Entity";

export class Membership extends Entity {
    constructor(props) {
        super();
        if (props)
            for (let key in this) {
                this[key] = props[key];
            }
    }

    projectid: number = null
    userid: number = null
    userStatusid: number = null

    static Parse = (object) => super.Parse(object, Membership);
    static Create = (props) => new Membership(props);

    toObject(): object {
        return super.toObject();
    }
}

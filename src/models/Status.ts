import {Entity} from "@/models/Entity";
import {IEntity} from "@/models/IEntity";

export const Status: IEntity = class Status extends Entity {
    constructor(props) {
        super();

        this.name = props.name || null;
    }

    name: string = null

    static Parse = (object) => super.Parse(object, Status);

    static Create = (props) => new Status(props);
}
import {Entity} from "@/models/Entity";

export default class UserStatus extends Entity {
    constructor(props) {
        super();

        this.id = props.id;
        this.name = props.name;
    }

    name: string = ""

    static Parse = (object) => super.Parse(object, UserStatus);

    static Create = (props) => new UserStatus(props);

    toObject(): object {
        return {id: this.id, name: this.name }
    }
}
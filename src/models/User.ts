import {Entity} from "@/models/Entity";

export class User extends Entity {
    constructor(props) {
        super();

        if (props)
        for (let key in this) {
            this[key] = props[key];
        }
    }

    firstname: string = ""
    secondname: string = ""
    lastname: string = ""
    nickname: string = ""
    email: string = ""
    password: string = ""
    imageid: number = 1

    static Parse = (object) => super.Parse(object, User);

    toObject(): object {
        return super.toObject();
    }

    static Create = (props) => new User(props);
}
import {Entity} from "@/models/Entity";

export class File extends Entity{
    constructor(props = null) {
        super();

        if (props) {
            for (let key in this) {
                this[key] = props[key];
            }
        }
    }

    id: number = null
    name: string = null
    data: any = null
    size: number = null
    type: string = null
    projectid: number = null
    statusid: number = null

    static Parse = (object) => super.Parse(object, File);

    static Create = (props) => new File(props);
}
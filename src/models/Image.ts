import {Entity} from "@/models/Entity";

class Image extends Entity {
    constructor(props) {
        super();

        if (props) {
            this.filename = props.filename;
            this.data = props.data;
        }
    }

    filename: string
    data: []

    static Parse = (object) => super.Parse(object, Image);

    static Create = (props) => new Image(props);
}
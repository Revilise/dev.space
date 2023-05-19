import {Entity} from "@/models/Entity";

export class Project extends Entity {
    constructor(props) {
        super();

        if (props) {
            for (let key in this) {
                this[key] = props[key];
            }
        }
    }

    name: string = ""
    description: string = ""
    goals: string = ""
    generalactivity: string = ""
    geography: string = ""
    expectedresults: string = ""
    report: string = ""
    stepnumber: number = null
    adminid: number = null

    static Parse = (object) => super.Parse(object, Project);


    toObject(): object {
        return super.toObject();
    }

    static Create = (props) => new Project(props);
}
import {Entity} from "@/models/Entity";

export class Project extends Entity {
    constructor(props) {
        super();

        if (props)
        for (let key in this) {
            this[key] = props[key];
        }
    }
    id: number
    name: string
    description: string
    goals: string
    generalActivity: string
    geography: string
    expectedResults: string
    report: string
    stepNumber: number
    adminId: number

    static Parse = (object) => super.Parse(object, Project);

    static Create = (props) => new Project(props);
}
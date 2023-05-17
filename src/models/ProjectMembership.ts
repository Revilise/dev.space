import {Project} from "@/models/Project";
import {User} from "@/models/User";
import {Entity} from "@/models/Entity";

export class ProjectMembership extends Entity {
    constructor(props) {
        super();
    }

    id: number
    Project: Project
    User: User

    static Parse = (object) => super.Parse(object, ProjectMembership);
    static Create = (props) => new ProjectMembership(props);

    toObject(): object {
        return {id: this.id, projectid: this.Project.id, userid: this.User.id }
    }
}

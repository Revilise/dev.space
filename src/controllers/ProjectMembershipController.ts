import {IController} from "@/controllers/IController";
import {ProjectMembership} from "@/models/ProjectMembership";

class ProjectMembershipController implements IController<ProjectMembership> {
    Delete(id: number): ProjectMembership {
        return undefined;
    }

    Insert(object: ProjectMembership): ProjectMembership {
        return undefined;
    }

    Update(id: number, object: ProjectMembership): ProjectMembership {
        return undefined;
    }

    getAll(): ProjectMembership[] {
        return [];
    }

    getById(id: number): ProjectMembership[] {
        return [];
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ProjectMembershipController();
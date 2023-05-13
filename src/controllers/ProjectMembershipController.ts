import {IController} from "@/controllers/IController";
import {ProjectMembershipEntity} from "@/models/ProjectMembership.entity";

class ProjectMembershipController implements IController<ProjectMembershipEntity> {
    Delete(id: number): ProjectMembershipEntity {
        return undefined;
    }

    Insert(object: ProjectMembershipEntity): ProjectMembershipEntity {
        return undefined;
    }

    Update(id: number, object: ProjectMembershipEntity): ProjectMembershipEntity {
        return undefined;
    }

    getAll(): ProjectMembershipEntity[] {
        return [];
    }

    getById(id: number): ProjectMembershipEntity[] {
        return [];
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ProjectMembershipController();
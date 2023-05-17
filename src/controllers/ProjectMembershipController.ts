import {IController} from "@/controllers/IController";
import {ProjectMembership} from "@/models/ProjectMembership";

class ProjectMembershipController implements IController<ProjectMembership> {
    delete(id: number): Promise<boolean> {
        return Promise.resolve(false);
    }

    getAll(): Promise<ProjectMembership[]> {
        return Promise.resolve([]);
    }

    getById(id: number): Promise<ProjectMembership> {
        return Promise.resolve(undefined);
    }

    insert(object: ProjectMembership): Promise<ProjectMembership> {
        return Promise.resolve(undefined);
    }

    update(id: number, object: ProjectMembership): Promise<ProjectMembership> {
        return Promise.resolve(undefined);
    }

}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ProjectMembershipController();
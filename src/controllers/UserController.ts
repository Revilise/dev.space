import {IController} from "@/controllers/IController";
import {UserEntity} from "@/models/User.entity";
import {UsersRepository} from "@/databases/repositories/UsersRepository";

class UserController implements IController<UserEntity> {
    Delete(id: number): UserEntity {
        return undefined;
    }

    Insert(object: UserEntity): UserEntity {
        return undefined;
    }

    Update(id: number, object: UserEntity): UserEntity {
        return undefined;
    }

    getAll(): UserEntity[] {
        const a = UsersRepository.then(repo => repo.createQueryBuilder("user"))
        return [];
    }

    getById(id: number): UserEntity[] {
        return [];
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new UserController();
import AppDataSource from "@/databases/postgesql/db-connection.ts";
import {UserEntity} from "@/models/User.entity";

export const UsersRepository = AppDataSource.then(db => db.getRepository(UserEntity))
import AppDataSource from "@/databases/postgesql/db-connection.ts";
import {StatusEntity} from "@/models/Status.entity";

export const StatusesRepository = AppDataSource.getRepository(StatusEntity);
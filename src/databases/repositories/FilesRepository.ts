import AppDataSource from "@/databases/postgesql/db-connection.ts";
import {FileEntity} from "@/models/File.entity";

export const FilesRepository = AppDataSource.getRepository(FileEntity);
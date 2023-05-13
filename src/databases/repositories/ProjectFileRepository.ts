import AppDataSource from "@/databases/postgesql/db-connection.ts";
import {ProjectFileEntity} from "@/models/ProjectFile.entity";

export const ProjectFileRepository = AppDataSource.getRepository(ProjectFileEntity);
import AppDataSource from "@/databases/postgesql/db-connection.ts";
import {ProjectEntity} from "@/models/Project.entity";

export const ProjectRepository = AppDataSource.getRepository(ProjectEntity);
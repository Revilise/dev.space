import AppDataSource from "@/databases/postgesql/db-connection.ts";
import {ProjectMembershipEntity} from "@/models/ProjectMembership.entity";

export const ProjectMembershipRepository = AppDataSource.getRepository(ProjectMembershipEntity);
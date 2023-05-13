import AppDataSource from "@/databases/postgesql/db-connection.ts";
import {InviteRequest} from "@/models/InviteRequest.Entity";

export const InviteRequestsRepository = AppDataSource.getRepository(InviteRequest);
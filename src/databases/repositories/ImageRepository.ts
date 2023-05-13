import AppDataSource from "@/databases/postgesql/db-connection.ts";
import {ImageEntity} from "@/models/Image.entity";

export const ImageRepository = AppDataSource.getRepository(ImageEntity);
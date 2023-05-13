import "reflect-metadata";
import { DataSource } from "typeorm";

import type {PostgresConnectionOptions} from "typeorm/driver/postgres/PostgresConnectionOptions";

import {UserEntity} from "@/models/User.entity";
import {ImageEntity} from '@/models/Image.entity';
import {FileEntity} from '@/models/File.entity';
import {StatusEntity} from "@/models/Status.entity";
import {InviteRequestEntity} from "@/models/InviteRequest.Entity";
import {ProjectEntity} from "@/models/Project.entity";
import {ProjectFileEntity} from "@/models/ProjectFile.entity";
import {ProjectMembershipEntity} from "@/models/ProjectMembership.entity";

const options: PostgresConnectionOptions = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "dev_space_db",
    // entities: ['./src/models/**/*.entity.ts'],
    entities: [ UserEntity, ImageEntity, StatusEntity, FileEntity, InviteRequestEntity, ProjectEntity, ProjectFileEntity, ProjectMembershipEntity],
    synchronize: true,
    logging: false,
}

const AppDataSource = new DataSource(options);

// to initialize initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap

function setupConnection() {
    return (async () => {
        await AppDataSource.initialize();

        if (!AppDataSource.isInitialized)throw new Error("error of initialization");
        return AppDataSource;
    })();
}

console.log(setupConnection());

export default setupConnection();
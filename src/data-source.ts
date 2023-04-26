import {User} from "./models/User";
import {DataSource} from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "root",
    password: "root",
    database: "dev_space_db",
    synchronize: true,
    logging: true,
    entities: [User],
    subscribers: [],
    migrations: [],
})
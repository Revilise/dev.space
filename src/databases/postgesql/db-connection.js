import {Pool} from "pg";

const {env} = process;

export const pool = new Pool({
    database: env.SQL_DB,
    host: env.SQL_HOST,
    password: env.SQL_PASS,
    user: env.SQL_USER,
    port: env.SQL_PORT
});

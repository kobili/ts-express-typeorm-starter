import appConfig from './appconfig'
import { DataSource } from "typeorm"
import { User } from "./entities/User"
import { AddUserTable1686805498941 as AddUserTable } from './migrations/1686805498941-AddUserTable'


export const PGDataSource = new DataSource({
    type: "postgres",
    host: appConfig.db.host,
    port: appConfig.db.port,
    username: appConfig.db.username,
    password: appConfig.db.password,
    database: appConfig.db.database,
    synchronize: false,
    logging: true,
    entities: [
        User,
    ],
    subscribers: [],
    migrations: [
        AddUserTable
    ],
})

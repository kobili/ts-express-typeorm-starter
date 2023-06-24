import appConfig from './appconfig'
import { DataSource } from "typeorm"

export const PGDataSource = new DataSource({
    type: "postgres",
    host: appConfig.db.host,
    port: appConfig.db.port,
    username: appConfig.db.username,
    password: appConfig.db.password,
    database: appConfig.db.database,
    synchronize: false,
    logging: true,
    entities: ["src/entities/**/*.ts"],
    subscribers: [],
    migrations: ["src/migrations/**/*.ts"],
})

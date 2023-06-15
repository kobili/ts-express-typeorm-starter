import dotenv from 'dotenv'
dotenv.config()

import { DataSource } from "typeorm"
import { User } from "./entities/User"
import { AddUserTable1686805498941 as AddUserTable } from './migrations/1686805498941-AddUserTable'


export const PGDataSource = new DataSource({
    type: "postgres",
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT!),
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
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

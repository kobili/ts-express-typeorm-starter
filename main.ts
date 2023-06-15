import 'reflect-metadata'
import express from 'express'
import { PGDataSource } from './src/datasource'


const app = express()
app.use(express.json())

app.get("/", (req, res) => res.send("Hello world"))

PGDataSource.initialize()
    .then(() => {
        console.log("Connected to postgres")
        app.listen(9090, () => console.log(`server running at http://localhost:9090`))
    })
    .catch(err => console.error(err))

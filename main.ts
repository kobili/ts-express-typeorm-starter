import express from 'express'

const app = express()
app.use(express.json())

app.get("/", (req, res) => res.send("Hello world"))

app.listen(9090, () => console.log(`server running at http://localhost:9090`))

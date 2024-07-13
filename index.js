const express = require('express')
const app = express()
const routes = require("./routes/index")


app.use(express.json())


app.use("/api/v1", routes)


app.listen(7000, () => console.log("Connected...."))
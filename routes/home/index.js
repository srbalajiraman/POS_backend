const express = require("express")
const { validationResult } = require("express-validator")
const { getCreateTableUser } = require("./query")

const routes = express.Router()

routes.get("/get", async (req, res) => {
    let errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).send({ type: "error", errors });
    }

    const data = await getCreateTableUser()
    res.status(200).send({ type: "sucess", data })
})


// module.exports = routes
export { routes as HomeRoutes }
const express = require("express")
import { HomeRoutes } from "./home"

const routes = express.Router()

routes.use("/home", HomeRoutes)

module.exports = routes
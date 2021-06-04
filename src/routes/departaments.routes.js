const express = require("express");
const controller = require("../controllers/Departaments");

const departamentRouter = express.Router();

departamentRouter.post("/departaments", controller.create);
departamentRouter.get("/departaments", controller.list);
departamentRouter.get("/departament/:id", controller.showProductsDep)

module.exports = { departamentRouter };

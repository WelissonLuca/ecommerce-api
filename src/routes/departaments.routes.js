const express = require("express");
const controller = require("../controllers/Departaments");

const departamentRouter = express.Router();

departamentRouter.post("/departaments", controller.create);
departamentRouter.get("/departaments", controller.list);

module.exports = { departamentRouter };

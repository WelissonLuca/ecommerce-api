const express = require("express");
const controller = require("../controllers/Departaments");

const departamentRouter = express.Router();

departamentRouter.post("/", controller.create);

module.exports = { departamentRouter };

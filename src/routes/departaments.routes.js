const express = require('express');
const controller = require('../controllers/Departaments');

const departamentRouter = express.Router();

departamentRouter.post(
  '/departaments',
  /*
    #swagger.tags = ['Departaments'],
    #swagger.parameters['post departament object'] = {
            in: 'body',
            description: "New departament values",
            schema: {
               
 		"$name": "Limpeza"
            }
    } */
  controller.create
);
departamentRouter.get(
  '/departaments',
  /* #swagger.tags = ['Departaments'], */
  controller.list
);
departamentRouter.get(
  '/departament/:id',
  /* #swagger.tags = ['Departaments'], */
  controller.showProductsDep
);
departamentRouter.delete(
  '/departament/:id',
  /* #swagger.tags = ['Departaments'], */
  controller.delete
);

module.exports = { departamentRouter };

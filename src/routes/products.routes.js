const express = require('express');
const controller = require('../controllers/Products');

const productsRouter = express.Router();

productsRouter.get(
  '/products',
  /* #swagger.tags = ['Products'], */
  controller.list
);

productsRouter.get(
  '/product/:id',
  /* #swagger.tags = ['Products'], */
  controller.show
);

productsRouter.post(
  '/products',

  /*
    #swagger.tags = ['Products'],
    #swagger.parameters['post products object'] = {
            in: 'body',
            description: "New products values",
            schema: {
               
      "$name": "SSD",
    "$description": "500GB",
    "$price": "1000",
    "$is_available": "sim",
    "$amount": 4,
    "$departament": 1

            }
    } */
  controller.create
);

productsRouter.put(
  '/product/:id',
  /*
    #swagger.tags = ['Products'],
    #swagger.parameters['put products object'] = {
            in: 'body',
            description: "update products values",
            schema: {
               
    	
    "$price": "1000",
    "$is_available": "sim",
    "$amount": 4,
    

            }
    } */
  controller.update
);

productsRouter.delete(
  '/product/:id',
  /* #swagger.tags = ['Products'], */
  controller.delete
);
module.exports = { productsRouter };

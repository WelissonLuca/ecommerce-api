const express = require('express');
const controller = require('../controllers/Products')

const productsRouter = express.Router();

productsRouter.get('/products', controller.list)
productsRouter.get('/product/:id', controller.show)
productsRouter.post('/products', controller.create)


module.exports = { productsRouter };
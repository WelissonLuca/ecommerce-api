const express = require('express');
const controller = require('../controllers/Products')

const productsRouter = express.Router();


productsRouter.post('/', controller.create)


module.exports = { productsRouter };
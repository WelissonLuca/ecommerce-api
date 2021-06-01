const express = require('express');
const controller = require('../controllers/Products')

const productsRouter = express.Router();


productsRouter.get('/', controller.create)



module.exports = { productsRouter };
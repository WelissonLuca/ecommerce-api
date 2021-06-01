const express = require('express');

const { productsRouter } = require('./routes/products')

const app = express();

app.use(express.json())


app.use('/', productsRouter)


app.listen(3000, () => console.log('server is running'))




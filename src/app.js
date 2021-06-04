const express = require('express');
const swaggerUi = require('swagger-ui-express');
const sequelize = require('./config/connection');
const { departamentRouter } = require('./routes/departaments.routes');
const { productsRouter } = require('./routes/products.routes');
const swaggerDocument = require('../swagger_output.json');

const app = express();

const start = async () => {
  try {
    await sequelize.authenticate();
    console.log('connection established');
    app.use(express.json());
    app.use(
      '/api-docs',
      (req, res, next) => {
        swaggerDocument.host = req.get('host');
        req.swaggerDoc = swaggerDocument;
        next();
      },
      swaggerUi.serve,
      swaggerUi.setup()
    );
    app.use('/', productsRouter);
    app.use('/', departamentRouter);

    app.listen(3000, () => console.log('server is running'));
  } catch (err) {
    console.log(err);
  }
};

start();

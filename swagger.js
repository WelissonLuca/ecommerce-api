const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';

const endpointsFiles = [
  './src/routes/departaments.routes.js',
  './src/routes/products.routes.js'
];

swaggerAutogen(outputFile, endpointsFiles);

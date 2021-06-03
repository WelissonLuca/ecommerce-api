const { Sequelize } = require("sequelize");
const dbConfig = require("./database.config");
const ProductsModel = require("../models/Products");
const DepartamentsModel = require("../models/Departaments");

const connection = new Sequelize(dbConfig);

ProductsModel.init(connection);
DepartamentsModel.init(connection);
DepartamentsModel.associate(connection.models)
ProductsModel.associate(connection.models);
module.exports = connection;

const { Sequelize } = require('sequelize');
const dbConfig = require('./database.config');



const connection = new Sequelize(dbConfig)


module.exports = connection
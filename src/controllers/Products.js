const Model = require('../models/Departaments');
const Sequelize = require("sequelize");

module.exports = {
	async create(req, res) {
		const { name } = req.body
		const departament = await Model.create({name});
		console.log(departament)

	
		return res.status(201).json(departament)
	},

	
};

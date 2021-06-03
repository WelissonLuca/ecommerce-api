const Model = require("../models/Departaments");
const Sequelize = require("sequelize");

module.exports = {
	async create(req, res) {
		try {
			const { name } = req.body;
			const departamentExists = await Model.findOne({ where: { name } });
			if (departamentExists)
				throw new Error("Departamento já existe na base de dados");

			const departament = await Model.create({ name });
			return res.status(201).json(departament);
		} catch (err) {
			return res.status(400).json({ message: err.message });
		}
	},
};

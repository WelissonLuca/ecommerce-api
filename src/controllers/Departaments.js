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
	async list(req, res) {
		try {
			const all = await Model.findAll();
			if ((all.length === 0)) throw new Error("Nenhum departamento cadastrado");
			return res.status(200).json(all);
		} catch (err) {
			return res.status(400).json({ message: err.message });
		}
	},
	async showProductsDep(req, res) {
		const { id } = req.params;
	}
	
};

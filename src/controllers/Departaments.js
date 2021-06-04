const Model = require("../models/Departaments");
const Products = require("../models/Products");
const Sequelize = require("sequelize");
const { json } = require("sequelize");

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
			if (all.length === 0) throw new Error("Nenhum departamento cadastrado");
			return res.status(200).json(all);
		} catch (err) {
			return res.status(400).json({ message: err.message });
		}
	},
	async showProductsDep(req, res) {
		try {
			const { id } = req.params;
			const departamentExists = await Model.findByPk(id );
			if (!departamentExists) throw new Error("Departamento não cadastrado");

			const departament_products = await Model.findAll({
				attributes: ["name"],
				include: [
					{
						model: Products,
						where: { departament: id },
						attributes: ["name", "description", "price", "amount"],
					},
				],
			});
			return res.status(200).json({ departament_products });
		} catch (err) {
			return res.status(404).json({ message: err.message });
		}
	},
};

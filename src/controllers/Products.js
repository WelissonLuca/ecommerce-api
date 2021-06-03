const Model = require('../models/Products');
const Sequelize = require("sequelize");

module.exports = {
	async list(req, res) {
		const all = await Model.findAll()
		return res.status(200).json(all);
	},
	async show(req, res) {
		try {
			const product = await Model.findOne({ where: { id: req.params.id } });
<<<<<<< HEAD
			if (productExists)
=======
>>>>>>> 77e192478a78baebc92681b519221fae37cc6928
				return res.status(200).json(product);
		} catch (error) {
			return res.status(404).json({ message: error });
		}
	},

	async create(req, res) {
		try {
<<<<<<< HEAD
			const { name, description, price, isAvailable, amount, departament } = req.body;
			const products = await Model.findOne({ name, description, price, isAvailable, amount, departament });
			return res.json(products);
=======
			const { name, description, price, is_available, amount, departament } =
				req.body;
			const products = await Model.create({
				name,
				description,
				price,
				is_available,
				amount,
				departament,
			});
			return res.status(201).json(products);
>>>>>>> 77e192478a78baebc92681b519221fae37cc6928
		} catch (error) {
			return res.status(400).json({ message: error });
		}
	}
}

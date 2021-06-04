const Model = require("../models/Products");

module.exports = {
  async list(req, res) {
    try {
      const all = await Model.findAll();
      if (all.length === 0) throw new Error("Nenhum produto cadastrado");
      return res.status(200).json(all);
    } catch (err) {
      return res.status(404).json({ message: err.message });
    }
  },
  async show(req, res) {
    try {
      const product = await Model.findOne({ where: { id: req.params.id } });
      if (product === null) throw new Error("Produto não cadastrado");
      return res.status(200).json(product);
    } catch (err) {
      return res.status(404).json({ message: err.message });
    }
  },

  async create(req, res) {
    try {
      const { name, description, price, is_available, amount, departament } =
        req.body;
      const productExists = await Model.findOne({ where: { name } });
      if (productExists) throw new Error('Produto já existe na base de dados');
      else {
        const products = await Model.create({
          name,
          description,
          price,
          is_available,
          amount,
          departament,
        });
        return res.status(201).json(products);
      }
     
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  },
};

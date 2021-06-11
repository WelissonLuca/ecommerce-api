const Products = require('../models/Products');
const Model = require('../models/Products');

module.exports = {
  async list(req, res) {
    try {
      const all = await Model.findAll();
      if (all.length === 0) throw new Error('Nenhum produto cadastrado');
      return res.status(200).json(all);
    } catch (err) {
      return res.status(404).json({ message: err.message });
    }
  },
  async show(req, res) {
    try {
      const product = await Model.findOne({ where: { id: req.params.id } });
      if (product === null) throw new Error('Produto não cadastrado');
      return res.status(200).json(product);
    } catch (err) {
      return res.status(404).json({ message: err.message });
    }
  },

  async create(req, res) {
    try {
      const { name, description, price, is_available, amount, departament } =
        req.body;
      if (
        name === '' ||
        description === '' ||
        price === null ||
        is_available === '' ||
        amount === null ||
        departament === null
      )
        throw new Error('Preencha todos os dados');
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
      return res.status(404).json({ message: err.message });
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params;
      const { price, is_available, amount } = req.body;
      const productId = await Model.findByPk(id);
      if (!productId || productId == null)
        throw new Error('Produto não cadastrado');

      const updateProduct = await Model.update(
        {
          price,
          is_available,
          amount,
        },
        { where: { id } }
      );

      return res.status(200).json({ 
        message: 'Produto atualizado com sucesso'
      });
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      const product = await Model.findByPk(id);
      if (!product) throw new Error('Produto não cadastrado');
      product.destroy({ where: { id: req.params.id } });
      return res.status(200).json({ message: 'Produto deletado com sucesso' });
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  },
};

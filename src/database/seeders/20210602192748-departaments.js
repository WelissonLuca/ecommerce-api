module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'departaments',
      [
        {
          name: 'eletronicos',
        },
        {
          name: 'Produtos de higiene',
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('departaments', null, {});
  },
};

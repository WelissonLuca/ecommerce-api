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
        {
          name: 'Decoração',
        },
        {
          name: 'Calçados',
        },
        {
          name: 'Acessorios',
        },
        {
          name: 'Cozinha',
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('departaments', null, {});
  },
};

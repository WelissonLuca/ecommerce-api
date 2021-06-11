module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'products',
      [
        {
          name: 'Notebook',
          description: '4gb Ram',
          price: 1200,
          is_available: 'sim',
          amount: 4,
          departament: 1,
        },
        {
          name: 'Iphone',
          description: '8',
          price: 4000,
          is_available: 'não',
          amount: 4,
          departament: 1,
        },
        {
          name: 'Shampoo',
          description: 'Monange',
          price: 20,
          is_available: 'sim',
          amount: 4,
          departament: 2,
        },
        {
          name: 'Sabão',
          description: 'Monange',
          price: 1,
          is_available: 'sim',
          amount: 4,
          departament: 2,
        },
        {
          name: 'Notebook',
          description: '4gb Ram',
          price: 1200,
          is_available: 'sim',
          amount: 4,
          departament: 1,
        },
        {
          name: 'Fita de led',
          description: '5 metros de fita RGB',
          price: 100,
          is_available: 'sim',
          amount: 4,
          departament: 3,
        },
        {
          name: 'Panela de pressão',
          description: 'Panela tramontina',
          price: 160,
          is_available: 'sim',
          amount: 40,
          departament: 6,
        },
        {
          name: 'Havaiana',
          description: 'Sandalia personalizada ',
          price: 80,
          is_available: 'sim',
          amount: 40,
          departament: 4,
        },
        {
          name: 'Relogio ',
          description: 'Rolex prateado',
          price: 12000,
          is_available: 'sim',
          amount: 90,
          departament: 5,
        },
        {
          name: 'Cordão',
          description: 'Cordão dourado',
          price: 4000,
          is_available: 'não',
          amount: 40,
          departament: 5,
        },
        {
          name: 'Sabão em pó',
          description: 'Sabão pra lavar roupa',
          price: 20,
          is_available: 'sim',
          amount: 45,
          departament: 2,
        },
        {
          name: 'Frigideira',
          description: 'Tramontina',
          price: 100,
          is_available: 'sim',
          amount: 444,
          departament: 6,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('products', null, {});
  },
};

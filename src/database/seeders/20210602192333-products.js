'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
     await queryInterface.bulkInsert(
				"products",
				[
					{
						name: "Notebook",
						description: "4gb Ram",
						price: 1200,
						isAvailable: "sim",
						amount: 4,
						departament: 1,
					},
					{
						name: "Iphone",
						description: "8",
						price: 4000,
						isAvailable: "não",
						amount: 4,
						departament: 1,
					},
					{
						name: "Shampoo",
						description: "Monange",
						price: 20,
						isAvailable: "sim",
						amount: 4,
						departament: 2,
					},
					{
						name: "Sabão",
						description: "Monange",
						price: 1,
						isAvailable: "sim",
						amount: 4,
						departament: 2,
					},
				],
				{}
			);
    
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkDelete("products", null, {});
     
  }
};

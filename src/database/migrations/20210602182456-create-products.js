"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("products", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			description: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			price: {
				type: Sequelize.DECIMAL,
				allowNull: false,
			},
			isAvailable: {
				type: Sequelize.ENUM("sim", "não"),
				allowNull: false,
			},
			departament: {
				type: Sequelize.INTEGER,
				allowNull: false,
				reference: { model: "departaments", key: "id" },
				onUpdate: "CASCADE",
				onDelete: "CASCADE",
			},
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("product");
	},
};

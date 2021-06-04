const { DataTypes } = require("sequelize");
const Model = require("./baseModel");

class Departaments extends Model {
	static init(sequelize) {
		super.init(
			{
				name: DataTypes.STRING,
			},
			{
				sequelize,
				underscored: true,
				tableName: "departaments",
			}
		);
	}
	static associate(models) {
		Department.hasMany(models.Product, { foreignKey: "departament" });
	}
}

module.exports = Departaments;

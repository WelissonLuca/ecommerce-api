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
		Departaments.hasMany(models.Products, { foreignKey: "departament" });
	}
}

module.exports = Departaments;

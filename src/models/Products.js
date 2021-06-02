const { DataTypes } = require("sequelize");
const Model = require("./baseModel");
class Products extends Model {
	static init(sequelize) {
		super.init(
			{
				name: DataTypes.STRING,
				description: DataTypes.STRING,
				price: DataTypes.DECIMAL,
				isAvailable: DataTypes.ENUM("sim", "não"),
				amount: DataTypes.INTEGER,
				departament: DataTypes.INTEGER,
			},
			{
				sequelize,
				underscored: true,
				tableName: "product",
			}
		);
	}
	static associate(models) {
		this.belongsTo(model.Departaments, {
			foreignKey: "id",
			as: "departaments",
		});
	}
}

module.exports = Products;

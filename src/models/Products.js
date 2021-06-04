const { DataTypes } = require("sequelize");
const Model = require("./baseModel");
class Products extends Model {
	static init(sequelize) {
		super.init(
			{
				name: DataTypes.STRING,
				description: DataTypes.STRING,
				price: DataTypes.DECIMAL,
				is_available: DataTypes.ENUM("sim", "não"),
				amount: DataTypes.INTEGER,
				departament: DataTypes.INTEGER,
			},
			{
				sequelize,
				underscored: true,
				tableName: "products",
			}
		);
	}
	static associate(models) {
		this.belongsTo(models.Departaments, {
			foreignKey: "id",
		});
	}
}

module.exports = Products;

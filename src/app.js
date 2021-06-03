const express = require("express");
const sequelize = require("./config/connection");
const { departamentRouter } = require("./routes/departaments.routes");
const { productsRouter } = require("./routes/products");

const app = express();

app.use(express.json());

const start = async () => {
	try {
		await sequelize.authenticate();
		console.log("connection established");
	} catch (err) {
		console.log(err);
	}
};

start();

app.use("/", productsRouter);
app.use("/", departamentRouter);

app.listen(3000, () => console.log("server is running"));

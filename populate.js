/**
 * Just a way of populating mongo with some static data quick
 */

require("dotenv").config();

const connectDB = require("./db/connect");
const Product = require("./models/product");

const jsonProducts = require("./products.json");

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		await Product.deleteMany();
		await Product.create(jsonProducts);
		console.log("Success");
		//console.log(jsonProducts);
        process.exit(0);
	} catch (error) {
		console.log(error);
        process.exit(1);
	}
};

start(); 
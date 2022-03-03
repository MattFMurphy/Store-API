require("dotenv").config();
const { request } = require("express");
require('express-async-errors');


const express = require("express");
const app = express();

const connectDB = require("./db/connect");
const productsRouter = require("./routes/products");

const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleWare = require("./middleware/error-handler");

//require('./populate');

//middleware
app.use(express.json());

//routes

app.get("/", (req, res) => {
	res.send(`<h1>Store API</h1><a href="/api/v1/products">products route</a>`);
});

app.use("/api/v1/products", productsRouter);

//products route

app.use(notFoundMiddleware);
app.use(errorMiddleWare);

const port = process.env.PORT || 3000;

const start = async () => {
	try {
		//Connect DB
		await connectDB(process.env.MONGO_URI);
		app.listen(port, console.log(`Server is listening to port ${port}`));
	} catch (error) {
		console.log(error);
	}
};
start();
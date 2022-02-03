import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import Product from "./models/productModel.js";


dotenv.config();

const app = express();

app.use(cors());



app.get("/", (req, res) => {
    res.send("API is Running");
});

app.get("/api/v1/products", async (req, res) => {
    const products =  await Product.find({})
    res.json( products );
});

app.get("/api/v1/products/:id", async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.json(product);// put res.json({product}) for object nd (priduct ) wihtout curly braces for array
});

app.listen(4500, console.log("Server is runing on port 4500"));

connectDB();
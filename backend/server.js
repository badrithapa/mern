import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";



dotenv.config();

const app = express();

app.use(cors());

const products = [
    {
        _id: "1",
        name: "Macbook Pro",
        image: "/images/macbook.jpeg",
        description:
            "The new MacBook Pro delivers game-changing performance for pros. With the powerful M1 Pro chip to power through your work while enjoying incredible",
        brand: "Apple",
        category: "Electronics",
        price: 1299,
        countInStock: 10,
        rating: 0.5,
        numReviews: 12,
    },
    {
        _id: "2",
        name: "iPhone 13",
        image: "/images/macbook.jpeg",
        description:
            "The new MacBook Pro delivers game-changing performance for pros. With the powerful M1 Pro chip to power through your work while enjoying incredible",
        brand: "Apple",
        category: "Electronics",
        price: 1299,
        countInStock: 0,
        rating: 3.5,
        numReviews: 5,
    },
    {
        _id: "3",
        name: "Apple watch Pro",
        image: "/images/macbook.jpeg",
        description:
            "The new MacBook Pro delivers game-changing performance for pros. With the powerful M1 Pro chip to power through your work while enjoying incredible",
        brand: "Apple",
        category: "Electronics",
        price: 1299,
        countInStock: 10,
        rating: 4.5,
        numReviews: 12,
    },
    {
        _id: "4",
        name: "Macbook Pro",
        image: "/images/macbook.jpeg",
        description:
            "The new MacBook Pro delivers game-changing performance for pros. With the powerful M1 Pro chip to power through your work while enjoying incredible",
        brand: "Apple",
        category: "Electronics",
        price: 1299,
        countInStock: 10,
        rating: 4.5,
        numReviews: 12,
    },
    {
        _id: "5",
        name: "Macbook Pro",
        image: "/images/macbook.jpeg",
        description:
            "The new MacBook Pro delivers game-changing performance for pros. With the powerful M1 Pro chip to power through your work while enjoying incredible",
        brand: "Apple",
        category: "Electronics",
        price: 1299,
        countInStock: 10,
        rating: 4.5,
        numReviews: 12,
    },
    {
        _id: "6",
        name: "Macbook Pro",
        image: "/images/macbook.jpeg",
        description:
            "The new MacBook Pro delivers game-changing performance for pros. With the powerful M1 Pro chip to power through your work while enjoying incredible",
        brand: "Apple",
        category: "Electronics",
        price: 1299,
        countInStock: 10,
        rating: 4.5,
        numReviews: 12,
    },
    {
        _id: "7",
        name: "Macbook Pro",
        image: "/images/macbook.jpeg",
        description:
            "The new MacBook Pro delivers game-changing performance for pros. With the powerful M1 Pro chip to power through your work while enjoying incredible",
        brand: "Apple",
        category: "Electronics",
        price: 1299,
        countInStock: 10,
        rating: 4.5,
        numReviews: 12,
    },
    {
        _id: "8",
        name: "Macbook Pro",
        image: "/images/macbook.jpeg",
        description:
            "The new MacBook Pro delivers game-changing performance for pros. With the powerful M1 Pro chip to power through your work while enjoying incredible",
        brand: "Apple",
        category: "Electronics",
        price: 1299,
        countInStock: 10,
        rating: 4.5,
        numReviews: 12,
    },
    {
        _id: "9",
        name: "Macbook Pro",
        image: "/images/macbook.jpeg",
        description:
            "The new MacBook Pro delivers game-changing performance for pros. With the powerful M1 Pro chip to power through your work while enjoying incredible",
        brand: "Apple",
        category: "Electronics",
        price: 1299,
        countInStock: 10,
        rating: 3.5,
        numReviews: 12,
    },
];

app.get("/", (req, res) => {
    res.send("API is Running");
});

app.get("/api/v1/products", (req, res) => {
    res.json( products );
});

app.get("/api/v1/products/:id", (req, res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);// put res.json({product}) for object nd (priduct ) wihtout curly braces for array
});

app.listen(4500, console.log("Server is runing on port 4500"));

connectDB();
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";

dotenv.config();

// const app = express();

// app.use(cors());

connectDB();
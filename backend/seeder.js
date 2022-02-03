import dotenv from "dotenv";

//raw data objects
import users from "./data/users.js";
import products from "./data/products.js";

//data model for mongoose
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";

import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
    try{
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        const createdUser = await User.insertMany(users);
        const adminUser = createdUser[0]._id;

        const sampleProducts = products.map((p) => {
            return {...p,user: adminUser};
        });

        await Product.insertMany(sampleProducts);

        console.log("Data Imported to mongoose");
    }catch(err) {
        console.error(err);
        process.exit();
    }
};

importData();
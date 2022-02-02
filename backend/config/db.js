import mongoose from "mongoose";
const connectDB = async () => {
     try{
         await mongoose.connect(process.env.MONGO_URL, {});
         console.log("Connected to MongoDB");
     }
     catch(err){
         console.error("Failed to make Connection to MongoDB\n");
         console.log(err);
         process.exit(1);
     }
 }
 export default connectDB;
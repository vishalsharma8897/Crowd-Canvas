const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const connect=async()=> {
    try {
        const uri = process.env.MONGODB_URL;
        await mongoose.connect(uri);
        console.log("Database connected Succesfully");
    } catch (error) {
        console.log("Database Connection Error");
        console.error(error);
    }
}
module.exports={connect};

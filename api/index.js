const express= require("express");
const app = express();
const Port = 8080;
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const db = require("./db.js");
const userRoute= require("./routes/user.js");
const authRoute =require("./routes/auth.js");
dotenv.config();
db.connect(); // A seperate file for connection and error handling

// Middlewares
app.use(express.json()); // for body parser:
app.use(helmet());
app.use(morgan("common")); // for information of a request :

app.use("/api/users",userRoute);
app.use("/api/auth",authRoute);


// Server starting...
app.listen(Port,()=>{
    console.log("Servers started at " + Port);
})
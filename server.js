const express = require("express");
const app = express();

const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

const router = require("./router")

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Backend server running!!")

});

app.use("/router",router);

app.listen(8000,async()=>{
    try {
        await mongoose.connect(process.env.MONGO);

        console.log("Server running on port 8000");
    } catch (error) {
        console.log(error);
        console.log("Error",error);
    }
})
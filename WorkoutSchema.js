const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    duration:{
        type:String,
        required:true
    },
    caloriesBurned:{
        type:String,
        required:true
    },  
     excerciseName:{
        type:String,
        required:true
    },
    reps:{
        type:String,
        required:true
    },
    sets:{
        type:String,
        required:true
    },
    weight:{
        type:String,
        required:true
    }
});

const user = mongoose.model("user",userSchema);
module.exports = user;



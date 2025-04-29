const express = require("express");
const mongoose  = require("mongoose");

const user = require("./WorkoutSchema");

const router = express.Router();

router.post("/postdata",async(req,res)=>{
    try {
        const {username,date,duration,caloriesBurned,excerciseName,reps,sets,weight} = req.body;
        if(!username || !date || !duration || !caloriesBurned || !excerciseName || !reps || !sets || !weight){
            res.status(400).send({msg:"All fields are required"});
        }
        const data = new user({username,date,duration,caloriesBurned,excerciseName,reps,sets,weight});
        await data.save();
        res.status(200).send({msg:"Data created successfully",data});
    } catch (error) {
        console.log(error)
        res.status(500).send({msg:"Something went wrong",error});
    }
});

router.get("/getdata",async(req,res)=>{
    try {
        const data = await user.find();
        res.status(200).send(data);
    } catch (error) {
        console.log(error)
        res.status(500).send({msg:"Something went wrong",error});
    }
});

router.put("/putdata/:id",async(req,res)=>{
    try {
        const {id} = req.params;
        if(!id){
            return res.status(400).send({msg:"Please provide id"});
        }
        const {username,date,duration,caloriesBurned,excerciseName,reps,sets,weight} = req.body;
        if(!username || !date || !duration || !caloriesBurned || !excerciseName || !reps || !sets || !weight){
            return res.status(400).send({msg:"All fields are required"});
        }
        const updatedData = await user.findByIdAndUpdate({_id:id},{username,date,duration,caloriesBurned,excerciseName,reps,sets,weight});
        if(!updatedData){
            return res.status(404).send({msg:"Data not found"})
        }
        res.status(200).send({msg:"Data updated successfully",updatedData});

        
    } catch (error) {
        console.log(error)
        res.status(500).send({msg:"Something went wrong",error});
    }
});

router.patch("/patchdata/:id",async(req,res)=>{
    try {
        const {id} = req.params;
        if(!id){
            return res.status(400).send({msg:"Please provide id"});
        }
        const{username,date,duration, caloriesBurned,excerciseName,reps,sets,weight} = req.body;
        if(!username && !date && !duration && !caloriesBurned && !excerciseName && !reps && !sets && !weight){
            return res.status(400).send({msg:"Please provide atleast one detail to update"});
        }
        const patchedData = await user.findByIdAndUpdate({_id:id},{username,date,duration,caloriesBurned,excerciseName,reps,sets,weight});
        res.status(200).send({msg:"Data updated successfully",patchedData});
        
    } catch (error) {
        console.log(error)
        res.status(500).send({msg:"Something went wrong",error});
    }
});

router.delete("/deletedata/:id",async(req,res)=>{
    try {
        const {id} = req.params;
        if(!id){
            return res.status(400).send({msg:"Please provide id"});
        }
        const deletedData = await user.findByIdAndDelete({_id:id});
        if(!deletedData){
            return res.status(404).send({msg:"Data not found"})
        }
        res.status(200).send({msg:"Data deleted successfully"});

        
    } catch (error) {
        console.log(error)
        res.status(500).send({msg:"Something went wrong",error});
    }
})

module.exports = router;


 
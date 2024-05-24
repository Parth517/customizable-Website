import express from 'express'

const router=express.Router();
import mongoose from "mongoose";

const sectionSchema=new mongoose.Schema({
    title: String,
    content: String,
    image: String,
});

const Section = mongoose.model('Section',sectionSchema)

router.get('/',async(req,res)=>{
    try{
        const sections=await Section.find();
        res.json(sections)
    }catch(error){
        res.status(400).json({error: error.message})
    }
})

export default router
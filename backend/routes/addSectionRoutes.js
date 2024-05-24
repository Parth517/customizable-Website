import express from "express";
const router=express.Router();
import Section from '../Models/sectionModel.js'
import dotenv from 'dotenv';


dotenv.config()

router.post('/:id',async (req,res)=>{
    const {title,content,image}=req.body;
    const {id} =req.params;

    if(!title|| !content || !image){
        return res.status(400).json({ message: 'Title, content, and image are required.'});

    }
    try {
        const newSection=new Section({
            title,content,image
        });

        const saveSection=await newSection.save();
        res.status(201).json(saveSection);
    } catch (error) {
        console.error("Error inserting Section:", error);
    res.status(500).json({ message: "An error occurred while inserting the image." });
    }
})

export default router
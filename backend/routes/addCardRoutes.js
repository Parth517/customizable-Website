import express from "express"
const router=express.Router();
import Card from '../Models/cardSection.js'
import dotenv from 'dotenv'

dotenv.config()

router.post("/:id",async(req,res)=>{
    const {title,image,content}=req.body
    const {id}=req.params;

    if(!title || !image || !content){
        return res.status(400).json({message:"Title,image,content are required."})
    }
    try{
        const newCard=new Card({
            title,image,content
        });

        const saveCard=await newCard.save();
        res.status(201).json(saveCard)
        res.status(500).json({message:"An error occured while inserting the image"})

    }
    catch(error){
        console.error("Error inserting Section:", error);
        res.status(500).json({ message: "An error occurred while inserting the image." });
    }
})

export default router
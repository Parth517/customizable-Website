import express from "express";
import  project from "../Models/ProjectModels.js"

const router= express.Router();

router.put('/:id',async(req,res)=>{
    try {
        const{url1,url2,url3,url4}=req.body;
        const images=await project.findById(req.params.id);

        if(!images){
            return res.status(404).json({ message: "Image not found" });
        }

        images.url1=url1
        images.url2=url2
        images.url3=url3
        images.url4=url4
        images.heading1=heading1
        images.heading2=heading2

        const updatedImages=await images.save();
        res.json(updatedImages)
    } catch (error) {
        console.error("Error updating image:", error);
        res.status(500).json({ message: "An error occurred while updating the image" });
    }
})

export default router;

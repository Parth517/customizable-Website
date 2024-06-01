import express from 'express';
import bgCard from '../Models/bgCardsModel.js'

const router=express.Router();


router.put('/:id',async(req,res)=>{
    try {
        const{url,text}=req.body
        const bgCardData=await bgCard.findById(req.params.id)

        if(!bgCardData){
            return res.status(404).json({ message: "Card Not Found" });
        }
        bgCardData.url=url;
        bgCardData.title=title;
        bgCardData.text=text;


        const updatedbgCard=await bgCardData.save()
        res.json(updatedbgCard)
    } catch (error) {
        console.error("Error updating section", error);
        res.status(500).json({ message: "An error occurred while updating the section" });
    }
})

export default router;
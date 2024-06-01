import express from 'express'
import Ad from '../Models/AdModel.js'

const router=express.Router();


router.put('/:id',async(req,res)=>{
    try {
        const {title,hText}=req.body
        const adData=await Ad.findById(req.params.id)

        if(!adData){
            return res.status(404).json({ message: "Card Not Found" });
        }

        adData.title=title;
        adData.hText=hText;
        adData.paragraph=paragraph

        const updatedAd=await adData.save()
        res.json(updatedAd)
    } catch (error) {
        console.error("Error updating section", error);
        res.status(500).json({ message: "An error occurred while updating the section" });
    }
})

export default router;
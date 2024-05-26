import express from 'express'
import Card from '../Models/cardSection.js'

const router=express.Router();

router.put('/:id',async (req,res)=>{
    try {
        const {title,image,content} =req.body
        const cardData=await Card.findById(req.params.id)

        if(!cardData){
            return res.status(404).json({ message: "Card Not Found" });
        }

        cardData.title=title;
        cardData.image=image;
        cardData.content=content

        const updatedCard=await cardData.save()
        res.json(updatedCard)
    } catch (error) {
        console.error("Error updating section", error);
        res.status(500).json({ message: "An error occurred while updating the section" });
    }
})

export default router;
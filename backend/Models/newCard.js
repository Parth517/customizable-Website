import mongoose from "mongoose"

const newCardSchema=new mongoose.Schema({
    title:String,
    text:String,
})

const newCard=mongoose.model("newcard",newCardSchema)

export default newCard
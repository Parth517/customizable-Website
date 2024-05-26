import mongoose from 'mongoose'

const cardSchema= new mongoose.Schema({
    title: String,
    image:String,
    content:String,
})

const Card=mongoose.model('Card',cardSchema)

export default Card;
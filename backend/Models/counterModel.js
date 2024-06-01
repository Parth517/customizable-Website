import mongoose from "mongoose"

const counterSchema=new mongoose.Schema({
    screen:Number,
    people:Number,
})

const Counter=mongoose.model('Counter',counterSchema)

export default Counter;
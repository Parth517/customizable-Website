import mongoose from 'mongoose';

const adSchema=new mongoose.Schema({
    title:String,
    hText:String,
    paragraph:String,
})

const Ad=mongoose.model('Ad',adSchema)

export default Ad
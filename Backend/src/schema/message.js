import mongoose from 'mongoose'

const messageSchema = new mongoose.Schema({
    body:{
        type:String,
        required:[true , "Empty message"]
    },
    Image:{
        type:String
    },
    channelId :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Channel',
        required: true
    },
    senderId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
} , {timestamps:true});
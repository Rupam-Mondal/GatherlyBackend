import mongoose from 'mongoose';

const channelSchema = new mongoose.Schema({
    name : {
        type:String,
        required: [true , "Name is required"]
    },
    workspace:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Workspace',
        required:true
    }
} , {timestamps:true});

const Channel = mongoose.model('Channel' , channelSchema);


export default Channel;
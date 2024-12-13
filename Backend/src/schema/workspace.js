import mongoose from 'mongoose'

const workSpaceSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true , "Name is required"]
    },
    description:{
        type:String
    },
    members:[
        {
            member:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'User'
            },
            role:{
                type:String,
                enum:['member' , 'admin'],
                default:'member'
            }
        }
    ],
    joincode:{
        type:String,
        required:[true , "Joincode is not required"]
    },
    channels:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Channel'
        }
    ]
});

const Workspace = mongoose.model('Workspace' , workSpaceSchema);

export default Workspace;
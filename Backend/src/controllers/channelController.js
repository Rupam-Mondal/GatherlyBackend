import { getChannelByIdService, UpdateChannelService } from "../service/channelService.js";

export async function getChannelController(req , res){
    try {
        const response = await getChannelByIdService(req.query.channelId , req.user.id);
        console.log(response)
        if(!response){
            throw null;
        }
        return res.json({
            success:true,
            message:"Details fetched succesfully",
            data:response
        })
    } catch (error) {
        return res.json({
            success:false,
            message:"Something went wrong in fetching"
        })
    }
}
export async function UpdateChannelNameController(req , res){
    try {
        console.log(req.body);
        const ChannelObject = {
            channelId: req.body.channelId, 
            channelName:req.body.channelName
        };
        const response = await UpdateChannelService(ChannelObject);
        return res.json({
            success:true,
            message:"Channel Updated succesfully",
            data:response
        })
    } catch (error) {
        return res.json({
            success:true,
            message:"Channel update failed"
        })
    }
}
import { getChannelByIdService } from "../service/channelService.js";

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
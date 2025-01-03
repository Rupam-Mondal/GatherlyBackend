import { createMessageService, getMessageOfChannelService } from "../service/messageService.js";


export async function createMessageController(req , res){
    try {
        const response = await createMessageService({ body: req.body.body, channelId: req.body.channelId, senderId:req.user.id});
        if (!response) {
            throw null;
        }
        return res.json({
            success: true,
            message: "Message created succesfully",
            data: response
        })
    } catch (error) {
        return res.json({
            success: false,
            message: "Some error occured or you are not valid user"
        })
    }
}
export async function getMessageOfChannelController(req , res){
    try {
        console.log(req.query);
        const response = await getMessageOfChannelService(req.user.id , req.query.workspaceId , req.query.channelId, req.query.offset, req.query.pageSize);
        if(!response){
            throw null;
        }
        return res.json({
            success:true,
            message:"Messages fetched succesfully",
            data:response
        })

    } catch (error) {
        return res.json({
            success:false,
            message:"Some error occured or you are not valid user"
        })
    }
}
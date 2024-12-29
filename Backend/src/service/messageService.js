import { createMessage, getMessagesOfChannel } from "../repositories/messageRepository.js";
import { isUserPartOfWorkspaceService } from "./workspaceService.js";


export async function createMessageService(MessageObject){
    try {
        const response = await createMessage(MessageObject);
        if(!response){
            throw null;
        }    
        return response;
    } catch (error) {
        console.log("Something went wrong");
        return null;
    }
}
export async function getMessageOfChannelService(userId , workspaceId , channelId , offset , pageSize){
    try {
        // const isUserValid = await isUserPartOfWorkspaceService(userId, workspaceId);
        // console.log(isUserValid)
        // if(isUserValid == false){
        //     throw null;
        // }
        const response = await getMessagesOfChannel(channelId , offset , pageSize);
        console.log(response)
        if(!response){
            throw null;
        }
        return response;
    } catch (error) {
        console.log("Something went wrong");
        return null;
    }
}
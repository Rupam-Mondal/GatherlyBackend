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
        const isUserValid = await isUserPartOfWorkspaceService(userId, workspaceId);
        if(isUserValid == false){
            throw null;
        }
        const response = await getMessagesOfChannel(channelId , offset , pageSize);
        if(!response){
            throw null;
        }
        return response;
    } catch (error) {
        console.log("Something went wrong");
        return null;
    }
}
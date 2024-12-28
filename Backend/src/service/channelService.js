import { getChannelById, updateChannelNameRepository } from "../repositories/channelRepository.js";
import { getMessagesOfChannel } from "../repositories/messageRepository.js";

export async function  getChannelByIdService(channelId , userId){
    try {
        const response = await getChannelById(channelId);
        const messages = await getMessagesOfChannel(channelId, 0, 10);
        return {
            _id:response._id,
            name:response.name,
            workspace:response.workspace,
            messages:messages,
            createdAt:response.createdAt,
            updatedAt:response.updatedAt
        }
    } catch (error) {
        console.log("Something went wrong");
        return null;
    }
}

export async function UpdateChannelService({ channelId , channelName}){
    try {
        const response = await updateChannelNameRepository({ channelId, channelName });
        return response;
    } catch (error) {
        console.log("Something went wrong");
        return null;
    }
}
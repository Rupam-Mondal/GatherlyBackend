import { getChannelById } from "../repositories/channelRepository.js";

export async function  getChannelByIdService(channelId){
    try {
        const response = await getChannelById(channelId);
        return response;
    } catch (error) {
        console.log("Something went wrong");
        return null;
    }
}
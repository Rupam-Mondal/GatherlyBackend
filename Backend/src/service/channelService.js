import { getChannelById } from "../repositories/channelRepository.js";

export async function  getChannelByIdService(channelId , userId){
    try {
        const response = await getChannelById(channelId);
        console.log(response);
        return response;
    } catch (error) {
        console.log("Something went wrong");
        return null;
    }
}
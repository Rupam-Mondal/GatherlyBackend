import Channel from "../schema/channel.js";


export async function getChannelById(ChannelId){
    try {
        const response = await Channel.findById(ChannelId).populate('workspace');
        return response;
    } catch (error) {
        console.log("Something went wrong");
        return null;
    }
}
export async function createChannel(ChannelObject){
    try {
        const channel = await Channel.create(ChannelObject);
        return channel
    } catch (error) {
        console.log("Something went wrong");
        return null;
    }
}
export async function updateChannelNameRepository({channelId , channelName}){
    try {
        const channel = await getChannelById(channelId);
        console.log(channel);
        channel.name = channelName;
        await channel.save();
        return channel;
    } catch (error) {
        console.log(error);
        return null;
    }
}
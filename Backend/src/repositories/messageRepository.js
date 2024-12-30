import Message from "../schema/message.js";


export async function createMessage(messageObject){
    try {
        const object = {
            body:messageObject.body,
            senderId:messageObject.senderId.id,
            channelId:messageObject.channelId
        }
        const response = await Message.create(object);
        return response;
    } catch (error) {
        console.log("Something went wrong");
        return null;
    }
}
export async function getMessagesOfChannel(channelId , offset , pageSize){
    try {
        const response = await Message.find({
            channelId:channelId
        }).sort({ createdAt: -1 }).skip(offset).limit(pageSize).populate('senderId');
        return response;
    } catch (error) {
        console.log("Something went wrong");
        return null;
    }
}
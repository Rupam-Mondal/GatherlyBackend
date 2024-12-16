import { createMessageService } from "../service/messageService.js";

export default function messageSocketController(io , socket){
    socket.on('newMessage', createMessageHandler);
}

async function createMessageHandler(data , cb){
    const msgResponse = await createMessageService(data);
    cb({
        success:true
    })
}
import { createMessageService } from "../service/messageService.js";

export default function messageSocketController(io , socket){
    socket.on('newMessage', async (data , cb) => {
        await createMessageHandler(data , cb , io , socket);
    });
}

async function createMessageHandler(data , cb , io , socket){
    const msgResponse = await createMessageService(data);
    io.emit("messageToAll" , data);
    cb({
        success:true
    })
}
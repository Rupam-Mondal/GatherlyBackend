export default function roomJoin(io , socket){
    socket.on('joinchannel' , function (data , cb) {
        const roomId = data.channelId;
        console.log(socket.id,"Joined the room")
        socket.join(roomId);
        cb({
            success:true,
            message:"Successfully joined the room"
        })
    })
}
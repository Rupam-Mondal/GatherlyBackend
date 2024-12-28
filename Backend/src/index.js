import express from 'express';
import connectDb from './config/dbconfig.js';
import userRouter from './routes/userRouter.js';
import { isAuthenticate } from './middlewares/authmiddleware.js';
import workspaceRouter from './routes/workspaceRouter.js';
import channelRouter from './routes/channelRouter.js';
import messageRouter from './routes/messageRouter.js';
import { createServer } from 'http';
import { Server } from 'socket.io';
import messageSocketController from './controllers/messageSocketController.js';
import roomJoin from './controllers/channelRoomSocket.js';
import cors from 'cors';

const app = express();
const server = createServer(app);
const io = new Server(server , {
    cors:{
        origin:'*'
    }
});

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.use('/api/user' , userRouter);
app.use('/api/workspace' , workspaceRouter);
app.use('/api/channel' , channelRouter);
app.use('/api/message' , messageRouter);

app.get('/ping', isAuthenticate , (req , res) => {
    return res.json({
        success:true,
    })
});

io.on('connection' , (socket) => {
    messageSocketController(io , socket);
    roomJoin(io , socket);
})

server.listen(3000 , () => {
    console.log("Server is running");
    connectDb();
})
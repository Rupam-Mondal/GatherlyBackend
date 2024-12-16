import express from 'express'
import { isAuthenticate } from '../middlewares/authmiddleware.js';
import { createMessageController, getMessageOfChannelController } from '../controllers/messageController.js';

const messageRouter = express.Router();

messageRouter.get('/getMessages', isAuthenticate, getMessageOfChannelController);
messageRouter.post('/sendMessage', isAuthenticate, createMessageController);

export default messageRouter;
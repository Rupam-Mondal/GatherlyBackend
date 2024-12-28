import express from 'express'
import { isAuthenticate } from '../middlewares/authmiddleware.js';
import { getChannelController, UpdateChannelNameController } from '../controllers/channelController.js';

const channelRouter = express.Router();

channelRouter.get('/channelDetails' , isAuthenticate , getChannelController);
channelRouter.post('/updateChannel', isAuthenticate, UpdateChannelNameController);

export default channelRouter;
import express from 'express'
import { isAuthenticate } from '../middlewares/authmiddleware.js';
import { getChannelController } from '../controllers/channelController.js';

const channelRouter = express.Router();

channelRouter.get('/channelDetails' , isAuthenticate , getChannelController);

export default channelRouter;
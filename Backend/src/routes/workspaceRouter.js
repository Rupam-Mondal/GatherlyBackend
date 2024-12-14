import express from 'express';
import { isAuthenticate } from '../middlewares/authmiddleware.js';
import { addChannelToworkspaceController, addMemberToworkspaceController, createWorkspaceController, getAllworkspaceController } from '../controllers/workspaceController.js';

const workspaceRouter = express.Router();

workspaceRouter.post('/createworkspace', isAuthenticate, createWorkspaceController);
workspaceRouter.get('/allworkspace', isAuthenticate, getAllworkspaceController);
workspaceRouter.post('/addmember', isAuthenticate, addMemberToworkspaceController);
workspaceRouter.post('/addchannel', isAuthenticate, addChannelToworkspaceController);
export default workspaceRouter;
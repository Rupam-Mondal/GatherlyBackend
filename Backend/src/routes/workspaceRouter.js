import express from 'express';
import { isAuthenticate } from '../middlewares/authmiddleware.js';
import { addChannelToworkspaceController, addMemberToworkspaceController, createWorkspaceController, getAllworkspaceController, isUserPartOfWorkspace } from '../controllers/workspaceController.js';

const workspaceRouter = express.Router();

workspaceRouter.post('/createworkspace', isAuthenticate, createWorkspaceController);
workspaceRouter.get('/allworkspace', isAuthenticate, getAllworkspaceController);
workspaceRouter.post('/addmember', isAuthenticate, addMemberToworkspaceController);
workspaceRouter.post('/addchannel', isAuthenticate, addChannelToworkspaceController);
workspaceRouter.post('/checkUser', isAuthenticate, isUserPartOfWorkspace);
export default workspaceRouter;
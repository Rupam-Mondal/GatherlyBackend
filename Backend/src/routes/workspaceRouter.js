import express from 'express';
import { isAuthenticate } from '../middlewares/authmiddleware.js';
import { createWorkspaceController, getAllworkspaceController } from '../controllers/workspaceController.js';

const workspaceRouter = express.Router();

workspaceRouter.post('/createworkspace', isAuthenticate, createWorkspaceController);
workspaceRouter.get('/allworkspace', isAuthenticate, getAllworkspaceController);
export default workspaceRouter;
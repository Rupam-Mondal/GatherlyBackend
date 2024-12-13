import express from 'express';
import { isAuthenticate } from '../middlewares/authmiddleware.js';
import { createWorkspaceController } from '../controllers/workspaceController.js';

const workspaceRouter = express.Router();

workspaceRouter.post('/createworkspace', isAuthenticate, createWorkspaceController)
export default workspaceRouter;
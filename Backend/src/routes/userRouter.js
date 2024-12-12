import express from 'express';
import { SignupController } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/signup', SignupController);

export default userRouter;
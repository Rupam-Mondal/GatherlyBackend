import express from 'express';
import { signinController, SignupController } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/signup', SignupController);
userRouter.post('/signin', signinController);

export default userRouter;
import express from 'express';
import connectDb from './config/dbconfig.js';
import userRouter from './routes/userRouter.js';
import { isAuthenticate } from './middlewares/authmiddleware.js';
import workspaceRouter from './routes/workspaceRouter.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/user' , userRouter);
app.use('/api/workspace' , workspaceRouter);

app.get('/ping', isAuthenticate , (req , res) => {
    return res.json({
        success:true,
    })
});

app.listen(3000 , () => {
    console.log("Server is running");
    connectDb();
})
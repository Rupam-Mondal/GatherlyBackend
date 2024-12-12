import express from 'express';

const userRouter = express.Router();

userRouter.get('/signup' , (req , res) => {
    res.json({
        succcess:true,
    })
});

export default userRouter;
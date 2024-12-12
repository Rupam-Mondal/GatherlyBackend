import express from 'express';
import connectDb from './config/dbconfig.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/ping' , (req , res) => {
    return res.json({
        success:true,
    })
});

app.listen(3000 , () => {
    console.log("Server is running");
    connectDb();
})
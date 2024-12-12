import express from 'express';

const app = express();

app.get('/ping' , (req , res) => {
    return res.json({
        success:true,
    })
});

app.listen(3000 , () => {
    console.log("Server is running");
})
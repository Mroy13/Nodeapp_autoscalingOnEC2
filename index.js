const express=require('express');
const { StatusCodes } = require('http-status-codes');
const app=express();
app.get('/api/info',(req,res)=>{
    
    return res.status(StatusCodes.OK).json({
        message:"api is live"
    });
});
app.listen(3000,()=>{
    console.log("server up at port 3000");
})
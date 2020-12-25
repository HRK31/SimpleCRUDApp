const express=require('express')
const app=express()
const port=3000

app.listen(3000);

app.get('/',(req,res)=>{
    res.sendFile('./views/index.html',{root:__dirname});
})
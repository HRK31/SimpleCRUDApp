const express=require('express')
const app=express()
const port=3000

app.listen(3000);
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    //res.sendFile('./views/index.html',{root:__dirname});
    res.render('index');
})

app.get('/add-items',(req,res)=>{
    //res.sendFile('./views/add-items.html',{root:__dirname});
    res.render('add-items');
})
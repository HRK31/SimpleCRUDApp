const express = require('express')
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const mongodb = 'mongodb+srv://root_simplecrud:SimpleCRUDApp@cluster0.ttby9.mongodb.net/item-database?retryWrites=true&w=majority';

mongoose.connect(mongodb, { useNewUrlParser: true, 
    useUnifiedTopology: true }).then(() => {
        console.log('connected');
        app.listen(3000);
}).catch(err => console.log(err))

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    //res.sendFile('./views/index.html',{root:__dirname});
    const items = [
        { name: 'Book', price: 1000 },
        { name: 'Notebook', price: 100 },
        { name: 'Pen', price: 20 },
        { name: 'Pencil', price: 10 }
    ]
    res.render('index', { items });
})

app.get('/add-items', (req, res) => {
    //res.sendFile('./views/add-items.html',{root:__dirname});
    res.render('add-items');
})

app.use((req, res) => {
    res.render('error');
})
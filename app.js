const express = require('express')
const mongoose = require('mongoose');
const Item = require('./models/items');
const app = express();

app.use(express.urlencoded({extended: true}));
const port = 3000;
const mongodb = 'mongodb+srv://root_simplecrud:SimpleCRUDApp@cluster0.ttby9.mongodb.net/item-database?retryWrites=true&w=majority';

mongoose.connect(mongodb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log('connected');
    app.listen(3000);
}).catch(err => console.log(err))

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    //res.sendFile('./views/index.html',{root:__dirname});
    // const items = [
    //     { name: 'Book', price: 1000 },
    //     { name: 'Notebook', price: 100 },
    //     { name: 'Pen', price: 20 },
    //     { name: 'Pencil', price: 10 }
    // ]
    // res.render('index', { items });
    res.redirect('get-items');
})

app.get('/get-items', (req, res) => {
    Item.find().then(result => {
        //res.send(result)
        res.render('index',{items: result})
    }).catch(err =>console.log(err));
})


app.get('/add-items', (req, res) => {
    //res.sendFile('./views/add-items.html',{root:__dirname});
    res.render('add-items');
})

app.post('/items',(req,res)=>{
    console.log(req.body);
    const item = Item(req.body);
    item.save().then(()=>{
        res.redirect('/get-items');
    }).catch(err=>(console.log(err)));
})

app.get('/items/:id',(req,res)=>{
    //console.log(req.params);
    const id =req.params.id;
    Item.findById(id).then(result=>{
        //console.log('result',result);
        res.render('item-detail',{item: result});
    })
})

app.get('/delete-item/:id',(req,res)=>{
    console.log(req.params);
    const id=req.params.id;
    console.log(id);
    Item.findByIdAndRemove(id).then(result=>{
        res.redirect('/get-items');
    })
})
app.use((req, res) => {
    res.render('error');
})
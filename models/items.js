const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    price: {
        type: Number,
        requred: true
    }
},{timestamps:true});

//if Item then it will search for items in collection
//If Apple then it will search for apples in collection
const Item = mongoose.model('Item', itemSchema)
module.exports = Item;

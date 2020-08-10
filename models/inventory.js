/*Create Order Schema model for Adding of inventories

Using an ORM (Mongoose) to interact with a simple database model*/
const mongoose = require('mongoose');

var Inventory = mongoose.model('Inventory', {
    price: { type: String },
    name: { type: String },
    inStock: { type: Boolean },
    date: { type: Date, default: Date.now },
});

//export model
module.exports = { Inventory };
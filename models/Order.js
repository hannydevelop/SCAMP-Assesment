//Create Order Schema model for ordering of inventories

//Using an ORM (Mongoose) to interact with a simple database model
const mongoose = require('mongoose');

var Order = mongoose.model('Order', {
    first_name: { type: String },
    last_name: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
    date: { type: Date, default: Date.now },
    username: { type: String },
});

//export model
module.exports = { Order };
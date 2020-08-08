const mongoose = require('mongoose');

var Order = mongoose.model('Order', {
    full_name: { type: String },
    address: { type: String },
    lon1: { type: String },
    lat1: { type: String },
    date: { type: Date, default: Date.now },
});

module.exports = { Order };
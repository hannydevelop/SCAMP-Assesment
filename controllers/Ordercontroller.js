const express = require('express');
var router = express.Router();
var { Order } = require('../models/Order');
var ObjectId = require('mongoose').Types.ObjectId;


router.get('/', (req, res) => {
    Order.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in retrieving order:' + JSON.stringify(err, undefined, 2)); }
    })
});


router.post('/', (req, res) => {
    const today = new Date()
    var ord = new Order({
        full_name: req.body.full_name,
        address: req.body.address,
        lon1: req.body.lon1,
        lat1: req.body.lat1,
        created: today,
    });
    ord.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in saving order:' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`no record with given id: ${req.params.id}`)

    Order.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in retrieving order:' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/1/:user', (req, res) => {
    Order.find({ user: req.params.user }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in retrieving order:' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/category/:categories', (req, res) => {
    Order.find({ categories: req.params.categories }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in retrieving order:' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/2/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('no record with given id: $(req.params.id)')

    Order.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in retrieving order:' + JSON.stringify(err, undefined, 2)); }
    });
});


module.exports = router;
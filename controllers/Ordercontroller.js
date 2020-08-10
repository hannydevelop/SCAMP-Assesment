const express = require('express');
var router = express.Router();
var { Order } = require('../models/order');


router.get('/', (req, res) => {
    var token = getToken(req.headers);
    if (token) {
        Order.find((err, docs) => {
            if (!err) { res.send(docs); }
            else { return res.status(403).send({ success: false, msg: 'Unauthorized.' }); }
        }).sort({ _id: -1 })
    }
});


router.post('/', (req, res) => {
    var token = getToken(req.headers);
    if (token) {
        const today = new Date()
        var ord = new Order({
            comment: req.body.comment,
            user: req.query.user,
            name: req.body.name,
            created: today,
            article: req.query.article,
        });
        ord.save((err, doc) => {
            if (!err) { res.send(doc); }
            else { console.log('Error in saving product:' + JSON.stringify(err, undefined, 2)); }
        });
    }
    else { return res.status(403).send({ success: false, msg: 'Unauthorized.' }); }
});

router.get('/:id', (req, res) => {
    var token = getToken(req.headers);
    if (token) {
        if (!ObjectId.isValid(req.params.id))
            return res.status(400).send(`no record with given id: ${req.params.id}`)

        Order.findById(req.params.id, (err, doc) => {
            if (!err) { res.send(doc); }
            else { console.log('Error in retrieving product:' + JSON.stringify(err, undefined, 2)); }
        });
    } else { return res.status(403).send({ success: false, msg: 'Unauthorized.' }); }
});


module.exports = router;
//import all necessary dependencies
const express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');

//import inventory model
var { Inventory } = require('../models/inventory');
//import config file which is holding the secret key
var config = require('../config')


/*route for viewing all inventories, it is protected; only an admin and sales person can access it*/
router.get('/', function (req, res) {
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'Unauthorized user!, you need to login to access this route' });

    jwt.verify(token, config.secret, function (err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        else if (!err && decoded.role === 'admin' || !err && decoded.role === 'salesPerson') {
            Inventory.find((err, docs) => {
                if (!err) { return res.status(200).send(docs); }
                else { console.log('Error in retrieving product:' + JSON.stringify(err, undefined, 2)); }
            })
        }
        else res.status(500).send({ auth: true, message: "This route is protected only an admin or Salesperson is allowed" });
    });
});


/*route for adding inventory, it is protected; only an admin can access it*/
router.post('/', (req, res) => {
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'Unauthorized user!, you need to login to access this route' });
    jwt.verify(token, config.secret, function (err, decoded) {
        if (!err && decoded.role === 'admin') {
        const today = new Date()
        var invent = new Inventory({
            name: req.body.name,
            price: req.body.price,
            inStock: req.body.inStock,
            created: today,
        });
        invent.save((err, doc) => {
            if (!err) { res.send(doc); }
            else { console.log('Error in saving product:' + JSON.stringify(err, undefined, 2)); }
        });
        } else if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        else return res.status(500).send({ auth: true, message: "Unauthorized user! you cannot add inventory if you're not an admin" });
    });
});

/*route for ordering (editing) inventory, it is protected; only a sales person can access it*/
router.put('/:id', function (req, res, next) {
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'Unauthorized user!, you need to login to access this route' });
    jwt.verify(token, config.secret, function (err, decoded) {
        if (!err && decoded.role === 'salesPerson') {
            Inventory.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
                if (err) return next(err);
                res.json(post);
            });
        } else if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        else return res.status(500).send({ auth: true, message: "Unauthorized user! you cannot edit or organize inventory if you're not a Salesperson" });
    })
    
});

/*route for viewing a single inventory, it is protected; only an admin and sales person can access it*/
router.get('/:id', function (req, res) {
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'Unauthorized user!, you need to login to access this route' });

    jwt.verify(token, config.secret, function (err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        else if (!err && decoded.role === 'admin' || !err && decoded.role === 'salesPerson') {
            Inventory.findById((err, docs) => {
                if (!err) { return res.status(200).send(docs); }
                else { console.log('Error in retrieving Inventory:' + JSON.stringify(err, undefined, 2)); }
            })
        }
        else res.status(500).send({ auth: true, message: "This route is protected only an admin or Salesperson is allowed" });
    });
});

//export inventory route controller
module.exports = router;
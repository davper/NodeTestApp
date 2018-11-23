const Product = require('../models/product.model');
const mongoose = require('mongoose');
//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

// controllers/products.js
exports.product_create = function (req, res) {




    
    //console.log(req);
        var product = new Product(
            {
                name: req.body.name,
                price: req.body.price
            }
        );
    console.log(product);
        product.save(function (err) {
            if (err) {
                return next(err);
            }
            res.send('Product Created successfully')
        })
};
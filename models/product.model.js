const mongoose = require('mongoose');
const Schema = mongoose.Schema({
    name: {type: String, required: true, max: 100},
    price: {type: Number, required: true},
});

//let ProductSchema = new Schema


// Export the model
module.exports = mongoose.model('Product', Schema);
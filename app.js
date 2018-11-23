// app.js

const express = require('express');
const bodyParser = require('body-parser');

const product = require('./routes/product.route'); // Imports routes for the products
const app = express();


var mongoose = require('mongoose');
var env = require('dotenv').load();    //Use the .env file to load the variables

mongoose.connect(process.env.COSMOSDB_CONNSTR+"?ssl=true&replicaSet=globaldb", {
    auth: {
      user: process.env.COSMODDB_USER,
      password: process.env.COSMOSDB_PASSWORD
    }
  })
  .then(() => console.log('Connection to CosmosDB successful'))
  .catch((err) => console.error(err));



// Set up mongoose connection
// const mongoose = require('mongoose');

// let dev_db_url = 'mongodb://david:i37BbG6TWWA0xLofolOZFu1yurrMKaLniWuCUkyNTkJgyKan6fQHtRha2SGBl5JGoanNGrngGLmxv3EdrZ4zzA%3D%3D@david.documents.azure.com:10255/?ssl=true';
// //let dev_db_url = 'mongodb://david:' + encodeURIComponent('i37BbG6TWWA0xLofolOZFu1yurrMKaLniWuCUkyNTkJgyKan6fQHtRha2SGBl5JGoanNGrngGLmxv3EdrZ4zzA==') + '@david.documents.azure.com:10255/?ssl=true&replicaSet=globaldb';
// //let dev_db_url = 'mongodb://david:ZS3CslYD8IeBsOEnYOIYuwkuoXbRqaBEOJXzay0EQCRR3nLl6uK3PrAdLx0y6tmxMvWu5O88YpV7fdh11o0UpQ==@david.documents.azure.com:10255/productstutorial';
// console.log(dev_db_url);
// const mongoDB = process.env.MONGODB_URI || dev_db_url;
// mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);


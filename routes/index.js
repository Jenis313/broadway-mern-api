const express = require('express');
const app = express();
// import
const user = require('./user');
const slider = require('./slider');
const brand = require('./brand');
const category = require('./category');
const product = require('./product');
const order = require('./order');

// use


app.use('/user', user);
app.use('/slider', slider);
app.use('/brand', brand);
app.use('/category', category);
app.use('/product', product);
app.use('/order', order);

module.exports = app;
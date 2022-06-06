const express = require('express');
const events = require('events');
const app = express();

const myEvents = new events.EventEmitter();

app.use((req, res, next) => {
    req.myEvents = myEvents;
    next();
})

// trigger when there is a registration
myEvents.on('register', (data) => {
    console.log('data on register is -> ', data);
})
myEvents.on('cart', (data) => {
    console.log('data on "ADD CRT" is -> ', data)
})

module.exports = app;
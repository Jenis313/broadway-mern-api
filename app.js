const express = require('express');
const app = express();
const morgan = require('morgan')
// Import routes
const routes = require('./routes/index');

// use morgan
app.use(morgan('dev'));

// Parse data
app.use(express.json())
app.use(express.urlencoded({
    extended : true
}))

// Use routes
app.use(routes);

// Error handling middlewares
app.use((req, res, next) => {
    next({
        statusCode : 404,
        msg : 'Not found'
    })
})
app.use((err, req, res, next) => {
    res
    .status(err.statusCode || 500)
    .json({
        msg : err.msg || JSON.stringify(err)
    })
})

//  Server Listen
app.listen(3030, (err) => {
    if(err){
        console.log('err in listening!');
    }
})



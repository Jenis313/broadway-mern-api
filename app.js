const express = require('express');
const app = express();
// import routes
const routes = require('./routes/index');

// order of middlewares matter
// app.get('/category', (req, res, next) => {
//     console.log('from the category block')
//     next()
// })

app.get('/test/:id', (req, res) => {
    console.log('req object ---> ',req)
    res.json({
        id : req.params.id,
        query: req.query.name
    })
})

// app.use((req, res, next) => {
//     res.json({
//         message : 'blocked at middleware!'
//     })
// })
// Routes
app.use(routes);


// Listen
app.listen(3030, (err) => {
    if(err){
        console.log('err in listening!');
    }
})



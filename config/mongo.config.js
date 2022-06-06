let mongoose = require('mongoose');
const { DB_URL, DB_NAME } = require('./db.config');
let connectionUrl = DB_URL + "/" + DB_NAME;
mongoose.connect(connectionUrl, (err) => {
    if(err){
        console.log("Mongoose error ->", err);
        return;
    }
    console.log("Database connection successful successful!")
})
const {MongoClient} = require('mongodb');
const {DB_URL, DB_NAME} = require('./../../config/db.config');
const dbService = () => {
    return new Promise(async (res, rej) => {
        try{
            let client = await MongoClient.connect(DB_URL);
            let db = client.db(DB_NAME)
            res(db)
        }catch(err){
            rej(err)
        }
    })
}

module.exports = {
    dbService
}
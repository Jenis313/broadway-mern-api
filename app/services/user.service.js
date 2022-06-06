const {dbService} = require('./mongodb.service');

class UserService {
    validateRegister = (data) => {
        let {full_name, username, email, password} = data;

        let errorMessages = {};
        if(!full_name) errorMessages.full_name = "Name required";
        if(!username) errorMessages.username = "username required";
        if(!email) errorMessages.email = "Email required";
        if(!password) errorMessages.password = "Password required";

        return errorMessages;
    }
    userRegister = (data) => {
                // Insert into database
        return new Promise((res, rej) => {
            dbService()
                .then((db) => {
                    db.collection('users').insertOne(data, (err, result) => {
                        if(err){
                            console.log('db connect error!')
                            rej(err)
                            return
                        }
                        console.log('db connect success!');
                        res(data);
                    })
        
                })
                .catch((err) => {
                    rej(err)
                })
        })        
    }
}
module.exports  = UserService;
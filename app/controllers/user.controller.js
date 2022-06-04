const UserService = require('./../services/user.service');
class UserController {
    userService;

    constructor(){
        this.userService = new UserService()
    }


    userRegister = (req, res, next) => {
        if(req.file){
            req.body.image = req.file.filename;
        }

      
        let errorMessages = this.userService.validateRegister(req.body)
        
        if(Object.keys(errorMessages).length !== 0){
            next({
                statusCode : 400,
                msg : errorMessages
            })
            return
        }
        res.json({
            result : {
                data : req.body
            },
            status: true,
            msg: 'User has been created'
        })
    }
    listAllUsers = (req, res, next) => {
        res.send('Hi this is user page and you are viewing all of the users list');
    }
    getUserById = (req, res, next) => {
        res.json({

        })
    }
    updateUserById = (req, res, next) =>{ 
        res.json({

        })
    }
    deleteUserById = (req, res, next) => {

    }
}

module.exports = UserController;
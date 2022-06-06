const mongodb = require("mongodb");
const { dbService } = require("../services/mongodb.service");
const MongoClient = mongodb.MongoClient;
const {DB_URL, DB_NAME} = require("./../../config/db.config");
// const client = new MongoClient(DB_URL)

const UserService = require('./../services/user.service');
class UserController {
    userService;

    constructor(){
        this.userService = new UserService()
    }

    userLogin = (req, res, next) => {
        // login
        let data = req.body;
        if(!data.username || !data.password){
            return next({
                statusCode: 400,
                msg : "Invallid credentials"
            })
        }


        MongoClient.connect(DB_URL)
        .then((result) => {

            const db = result.db(DB_NAME);

            db.collection('users')
            .findOne({
               username : data.username,
               password : data.password
            })
            .then((result) => {
                console.log("success find")
                res.json({
                    result : result,
                    status : true,
                    msg : "User fetched"
                })
            })
            .catch((err) => {
                console.log("error find")
                next({
                    statusCode : 500,
                    msg : err
                })
            })
        })
        .catch((err) => {
            console.log("err in connection" , err)
            return next({
                statusCode : 500,
                msg : err
            })
        })
    } 

    userRegister = (req, res, next) => {
        if(req.file){
            req.body.image = req.file.filename;
        }

    //   Check errors
        let errorMessages = this.userService.validateRegister(req.body)
        
        if(Object.keys(errorMessages).length !== 0){
            next({
                statusCode : 400,
                msg : errorMessages
            })
            return
        }
        this.userService.userRegister(req.body)
        .then((response) => {
            res.json({
                result : response,
                status : true,
                msg : 'userrr registereddd'
            })
        })
        .catch((err) => {
            next({
                statusCode : 500,
                msg : err
            })
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
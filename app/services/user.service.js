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
}
module.exports  = UserService;
const loginCheck = (req, res, next) => {
    const isLoggedIn = true;
    if(isLoggedIn){
        next()
        return;
    }
    next({
        statusCode : 401,
        msg : 'Unauthenticated'
    })
}
module.exports = loginCheck;
module.exports = function(req,res,next){
    if(req.cookies.cookieGlass){
        req.session.user = req.cookies.cookieGlass;
        res.locals.users = req.session.user
       
    }
        next()
    
}

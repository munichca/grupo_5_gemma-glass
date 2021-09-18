module.exports = function userAdmin(req,res,next){
    if(req.session.user.rol === "ROL_ADMIN"){
        next()
    }else{
        res.redirect('/')
    }
}
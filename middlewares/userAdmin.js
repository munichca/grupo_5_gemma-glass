module.exports = function userAdmin(req,res,next){
    
    if(req.session.user.rol == 1 || req.session.user.rol ===100){
        
        next()
    }else{
        res.redirect('/')
    }
}
module.exports = function userAdmin(req, res, next) {
    /* console.log(req.session) */
    /* switch (req.session.user.rol) {
        case 100:
            next()
            break;
        case 1:
            next()
            break;
        case 2:
            res.redirect('/')
            break;
    } */
    if (req.session.user.rol === 100 || req.session.user.rol === 1) {
        next()
    } else {
        res.redirect('/')
    }
}
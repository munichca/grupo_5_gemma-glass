let {categoria} = require ('../data/dataBase');

module.exports = {
    login: (req, res)=>{
         res.render("login",{
            categoria
         })
    },
    register: (req, res)=>{
        res.render("registro",{
            categoria
        })
    },
    user: (req, res)=>{
        res.render("user")
    },
    editProfileUser: (req, res)=>{
        res.render("editProfileUser")
    }
    

}
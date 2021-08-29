let {category} = require ('../data/dataBase');

module.exports = {
    login: (req, res)=>{
         res.render("login",{
            category
         })
    },
    register: (req, res)=>{
        res.render("registro",{
            category
        })
    },
    user: (req, res)=>{
        res.render("user")
    },
    editProfileUser: (req, res)=>{
        res.render("editProfileUser")
    }
    

}
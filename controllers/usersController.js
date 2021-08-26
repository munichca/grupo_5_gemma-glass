module.exports = {
    login: (req, res)=>{
         res.render("login")
    },
    register: (req, res)=>{
        res.render("registro")
    },
    user: (req, res)=>{
        res.render("user")
    },
    editProfileUser: (req, res)=>{
        res.render("editProfileUser")
    }
    

}
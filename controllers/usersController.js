let {categoria,users, writeUsersJSON} = require ('../data/dataBase');
let {validationResult} = require ("express-validator");
module.exports = {
    login: (req, res)=>{
         res.render("login",{
            categoria
         })
    },
    /* register: (req, res)=>{
        res.render("registro",{
            categoria
        })
    }, */
    user: (req, res)=>{
        res.render("user")
    },
    editProfileUser: (req, res)=>{
        res.render("editProfileUser")
    },
    agregarUser: (req, res)=>{
        res.render("registro",{
            categoria
        })
    },
    crearUser: (req, res)=>{
        let errors = validationResult(req)
        if(errors.isEmpty()){
            let lastId = 1;
        users.forEach(user =>{
            if(user.id > lastId){
                lastId = user.id
            }
        });
        let newUser = {
            id: lastId + 1,
            name: req.body.name,
            lastName: req.body.lastName,
            adress: req.body.adress,
            phone: req.body.phone,
            email: req.body.email,
            pass: req.body.pass,
            avatar: req.file? req.file.filename : "avatar.png"
            /* avatar: req.file.filename */
        }
        users.push(newUser);
        writeUsersJSON(users)
        res.redirect("/")
        }else{
            /* res.send(errors) */
            res.render("registro",{
                categoria,
                errors: errors.mapped(),
                old: req.body
            })
        }
        /* res.send(req.body) */
        
    }
    

}
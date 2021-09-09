let {categoria,users, writeUsersJSON} = require ('../data/dataBase');
let {validationResult} = require ("express-validator");
module.exports = {
    login: (req, res)=>{
         res.render("login",{
            categoria
         })
    },
    user: (req, res)=>{
        res.render("user")
    },
    editProfileUser: (req, res)=>{
        res.render("editProfileUser")
    },
    addUser: (req, res)=>{
        res.render("registro",{
            categoria
        })
    },
    createUser: (req, res)=>{
        let errors = validationResult(req)
        if(errors.isEmpty()){
            /* res.send(req.body) */
            let lastId = 0;
        users.forEach(user =>{
            if(user.id > lastId){
                lastId = user.id
            }
        });
        let {name, lastName, email, pass,phone, address } = req.body
        let newUser = {
            id: lastId + 1,
            name,
            lastName,
            address,
            phone,
            email,
            pass,
            pCode:"",
            city:"",
            province:"",
            rol:"ROL_USER",
            avatar: req.file? req.file.filename : "avatar.png"
        }
        users.push(newUser);
        writeUsersJSON(users)
        res.redirect("/users/login")
        }else{
            res.render("registro",{
                categoria,
                errors: errors.mapped(),
                old: req.body
            })
        }
        /* res.send(req.body) */
        
    },
    processLogin: (req, res)=>{
        res.send(req.body)
        let errors = validationResult(req)
        if(errors.isEmpty()){

        }else{
            res.render("login",{
                categoria,
                errors: errors.mapped(),
            })
        }
    

    }

}
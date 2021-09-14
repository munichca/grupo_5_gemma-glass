let {categoria,users, writeUsersJSON} = require ('../data/dataBase');
let {validationResult} = require ("express-validator");
let bcrypt=require('bcryptjs')
module.exports = {
    login: (req, res)=>{
         res.render("login",{
            categoria,
            session: req.session
         })
    },
    user: (req, res)=>{
        let user= users.find(user => user.id === +req.session.user.id)
        res.render("user", {
            categoria,
            user,
            session: req.session
        })
    },
    profileUser: (req, res)=>{
        /* res.send(req.session.user) */
        let user = users.find(user => user.id === +req.session.user.id)
        res.render("editProfileUser",{
            categoria,
            user,
            session: req.session
        })
    },
     updateProfile:(req,res)=> {
         
    },
    addUser: (req, res)=>{
        res.render("registro",{
            categoria,
              session: req.session
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
            pass:bcrypt.hashSync(pass,12),
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
                old: req.body,
                session: req.session
            })
        }
        /* res.send(req.body) */
        
    },
    processLogin: (req, res)=>{
        let errors = validationResult(req)
        if(errors.isEmpty()){
            let user = users.find(user => user.email === req.body.email)

            req.session.user={
                id : user.id,
                name :user.name,
                lastName: user.lastName,
                email: user.email,
                avatar: user.avatar,
                rol: user.rol
            }


            if(req.body.remember){
                    res.cookie('cookieGlass', req.session.user , { maxAge: 5000*60})
            }
            res.locals.user= req.session.user
            res.redirect('/')

        }else{
            res.render("login",{
                categoria,
                errors: errors.mapped(),
                session: req.session
            })
        }
    

    },
 logout:(req,res)=> {
        req.session.destroy();

        if(req.cookies.cookieGlass){
            res.cookie('cookieGlass','', {maxAge: -1})
        }
        res.redirect('/')
    }

}
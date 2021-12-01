
const db = require("../database/models")
let {validationResult} = require ("express-validator");
let bcrypt=require('bcryptjs')
module.exports = {
    login: (req, res)=>{
         
         res.render("login",{
            session: req.session
            
         })
    },
    user: (req, res)=>{
    db.User.findByPk(req.session.user.id, {
    }).then((user) => {
        res.locals.user = user,
        res.render("user", {
            
            user,
            session: req.session
        });
      });
    },
    profileUser: (req, res)=>{
    db.User.findByPk(req.session.user.id, {
    
    }).then((user) => {
        res.render("editProfileUser",{
            
            user,
            session: req.session
          });
        })
    },
    updateProfile: (req, res) =>{
        
        let errors = validationResult(req)
        if(errors.isEmpty()){
            let { 
                name, 
                lastName,
                phone,
                address,
                mail,
                pCode,
                province,
                city
            } = req.body;
            db.User.update({
                name,
                lastName,
                phone,
                address,
                mail,
                pCode,
                province,
                city,
                avatar: req.file ? req.file.filename : req.session.user.avatar
                
             },{
                where:{
                    id: req.params.id
                }
            })
            
                .then(()=>{
                    res.redirect("/users/user")
                })
           
            
                 
        } else{
            res.render('editProfileUser', {
                categoria,
                errors: errors.mapped(),
                old: req.body,
                session:req.session 
            })   
        }
    },
    addUser: (req, res)=>{
        res.render("registro",{
            
              session: req.session
        })
    },
    createUser: (req, res)=>{
        
        let errors = validationResult(req)
        if(errors.isEmpty()){
            let {name, lastName, address, phone, email, pass} = req.body;

            db.User.create({
                include: [ { association: "Product"}],
            name,
            lastName,
            address,
            email,
            phone,
            pass: bcrypt.hashSync(pass, 12),
            avatar: req.file ? req.file.filename : "avatar.png",
            rol: 2,
            lastProdId:47
            })
            .then(user => {
                
                res.redirect("/users/login")
            })
            .catch((error) => console.log(error));
         
        }else{
            res.render("registro",{
                
                errors: errors.mapped(),
                old: req.body,
                session: req.session
            });
        }
    },
    processLogin: (req, res)=>{
        
        let errors = validationResult(req);
        /* res.send(errors) */
        if(errors.isEmpty()){
            db.User.findOne({
                where: {
                  email: req.body.email,
                },
                
              }).then(user =>{
                req.session.user = {
                    id: user.id,
                    name: user.name,
                    lastName: user.lastName,
                    email: user.email,
                    avatar: user.avatar,
                    rol: user.rol,
                    lastProdId: user.lastProdId
                  };
                  
                  if (req.body.remember) {
                    res.cookie("cookieGlass", req.session.user, {
                      expires: new Date(Date.now() + 5000000),
                      httpOnly: true,
                    });
                  }
            res.locals.user= req.session.user;
           /*  res.redirect('/'); */
            if(req.session.user.rol == 2){
                res.redirect('/')
            }else{
                res.redirect('/administrator')
            }
              });
        }
        else{
            res.render("login",{
                errors: errors.mapped(),
                session: req.session
            });
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
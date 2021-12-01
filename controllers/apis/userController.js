const session = require("express-session")
const db = require("../../database/models")
const { Op } = require("sequelize");



const getUrl = (req) => {
    return `${req.protocol}://${req.get("host")}${req.originalUrl}`
}

module.exports = {
    superUser: (req, res)=> {
        db.User.findOne({where:{
            id : req.params.id,
            rol:{
                [Op.eq]:100
            }}
        }).then ((user) =>{
                session.getUrl= getUrl(req);
                return res.status(200).json({
                    meta: {
                        endpoint: getUrl(req),
                        status: 200,
                    },
                    data: user
                })
        }).catch(errors => console.log(errors))
    },
    users:(req, res)=>{
        db.User.findAll()
        .then((users)=>{
            return res.status(200).json({
                meta: {
                    endpoint: getUrl(req),
                    status: 200,
                },
                data: users
            })
        }).catch(errors => console.log(errors))
    },
    user:(req, res)=>  {
        db.User.findOne({where:{
            id : req.params.id,
            }
        }).then ((user) =>{
                session.getUrl= getUrl(req);
                return res.status(200).json({
                    meta: {
                        endpoint: getUrl(req),
                        status: 200,
                    },
                    data: user
                })
        }).catch(errors => console.log(errors))
    },
    
        
    /* createUser:(req,res)=>{
        let  {name, lastName, email, pass, avatar, phone, rol,address, lastProdId}= req.body
        db.User.create({
            name: name,
            rol:rol,
            lastName:lastName,
            email:email,
            pass:pass,
            avatar:avatar,
            phone:phone,
            address:address,
            lastProdId:lastProdId
        })
        .then((result)=>{
            res.status(201).json({
                meta:{
                    endpoint: getUrl(req),
                    msg: "creada"
                },
                data: result
            })
            
            
        }).catch(error=> console.log(error))
    }, */
    editUser:(req,res)=>{
        
        db.User.update({
            rol:req.body.rol
            
        },{
            where:{
                id: +req.params.id
            }
        })
        .then((result)=>{
            res.status(201).json({
                meta:{
                    endpoint: getUrl(req),
                    msg: "Updated"
                },
                data: result
            })
            
            
        }).catch(error=> console.log(error))
    }

    }
   
    

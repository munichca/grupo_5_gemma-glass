const db = require("../../database/models")
let {validationResult} = require ("express-validator");
const getUrl = (req) => {
    return `${req.protocol}://${req.get("host")}${req.originalUrl}`
}
module.exports = {

    
    shape: (req, res)=> {
        db.Shape.findAll({
        }).then ((shape) =>{
                return res.status(200).json({
                    meta: {
                        endpoint: getUrl(req),
                        status: 200,
                    },
                    data: shape
                })
        }) /* aca termina el then */
        .catch(errors => console.log(errors))
    },
    shapeName:(req, res)=>{
        db.Shape.findOne({
            where:{
                name : req.params.name
            }
        })
        .then ((shape) =>{
            return res.status(200).json({
                meta: {
                    endpoint: getUrl(req),
                    status: 200,
                    
                },
                data: shape
            })
            }).catch(error => console.log(error))
    },
    createShape: (req, res)=> {
        let errors = validationResult(req)
        if(errors.isEmpty()){
        db.Shape.create({
            name:req.body.subCatInput
        })
        .then(()=>{
            res.redirect('/formarmat/')
        }).catch(error => console.log(error))
    }else{
        
                if (req.session.user.rol === 1 || req.session.user.rol === 100) {
                    res.render("formarmat", {
                        
                        errors: errors.mapped(),
                        session: req.session
                    })
                } else {
                    res.redirect('/')
                }
           
    } 
    },
    editShape: (req, res)=> {
        let errors = validationResult(req)
        if(errors.isEmpty()){
                db.Shape.update({
                    name:req.body.subCatInput},{
                        where:{
                            id: +req.body.whi
                        }
                    }
                    ).then(()=>{
                        res.redirect("/formarmat/")
                    }).catch(error => console.log(error))
                }else{
                    if (req.session.user.rol === 1 || req.session.user.rol === 100) {
                        res.render("formarmat", {
                            
                            errors: errors.mapped(),
                            session: req.session
                        })
                    } else {
                        res.redirect('/')
                    }
               
        } 
    },
    
    deleteShape: (req, res)=> {
        db.Shape.destroy({
            where:{
                id:+req.body.whi
            }
        }).then(()=>{
            res.redirect("/formarmat/")
        }).catch(error => console.log(error))
    },
    brand: (req, res)=> {
        db.Brand.findAll({
        }).then ((brand) =>{
                return res.status(200).json({
                    meta: {
                        endpoint: getUrl(req),
                        status: 200,
                    },
                    data: brand
                })
        }) /* aca termina el then */
        .catch(errors => console.log(errors))
    },
    brandName:(req, res)=>{
        db.Brand.findOne({
            where:{
                name : req.params.name
            }
        })
        .then ((brand) =>{
            return res.status(200).json({
                meta: {
                    endpoint: getUrl(req),
                    status: 200,
                    
                },
                data: brand
            })
            }).catch(error => console.log(error))
    },
    createBrand: (req, res)=> {
        let errors = validationResult(req)
        if(errors.isEmpty()){
        db.Brand.create({
            name:req.body.subCatInput
        })
        .then(()=>{
            res.redirect('/formarmat/')
        }).catch(error => console.log(error))
    }else{
        if (req.session.user.rol === 1 || req.session.user.rol === 100) {
            res.render("formarmat", {
                
                errors: errors.mapped(),
                session: req.session
            })
        } else {
            res.redirect('/')
        }
   
}
        
    },
    editBrand: (req, res)=> {
        let errors = validationResult(req)
        if(errors.isEmpty()){
        db.Brand.update({
            name:req.body.subCatInput},{
                where:{
                    id: +req.body.whi
                }
            }
            ).then(()=>{
                res.redirect("/formarmat/")
            }).catch(error => console.log(error))
        }else{
            if (req.session.user.rol === 1 || req.session.user.rol === 100) {
                res.render("formarmat", {
                    
                    errors: errors.mapped(),
                    session: req.session
                })
            } else {
                res.redirect('/')
            }
       
}
    },
    deleteBrand: (req, res)=> {
        db.Brand.destroy({
            where:{
                id:+req.body.whi
            }
        }).then(()=>{
            res.redirect("/formarmat/")
        }).catch(error => console.log(error))
    },
    /* #################### */
    material: (req, res)=> {
        db.Material.findAll({
        }).then ((material) =>{
                return res.status(200).json({
                    meta: {
                        endpoint: getUrl(req),
                        status: 200,
                    },
                    data: material
                })
        }) /* aca termina el then */
        .catch(errors => console.log(errors))
    
    },
    materialName:(req, res)=>{
        db.Material.findOne({
            where:{
                name : req.params.name
            }
        })
        .then ((material) =>{
            return res.status(200).json({
                meta: {
                    endpoint: getUrl(req),
                    status: 200,
                    
                },
                data: material
            })
            }).catch(error => console.log(error))
    },
    createMaterial: (req, res)=> {
        let errors = validationResult(req)
        if(errors.isEmpty()){
        db.Material.create({
            name:req.body.subCatInput
        })
        .then(()=>{
            res.redirect('/formarmat/')
        }).catch(error => console.log(error))
    }else{
        if (req.session.user.rol === 1 || req.session.user.rol === 100) {
            res.render("formarmat", {
                
                errors: errors.mapped(),
                session: req.session
            })
        } else {
            res.redirect('/')
        }
   
}
    },
    editMaterial: (req, res)=> {
        let errors = validationResult(req)
        if(errors.isEmpty()){
        db.Material.update({
            name:req.body.subCatInput},{
                where:{
                    id: +req.body.whi
                }
            }
            ).then(()=>{
                res.redirect("/formarmat/")
            }).catch(error => console.log(error))
        }else{
            if (req.session.user.rol === 1 || req.session.user.rol === 100) {
                res.render("formarmat", {
                    
                    errors: errors.mapped(),
                    session: req.session
                })
            } else {
                res.redirect('/')
            }
       
    }
    },
    deleteMaterial: (req, res)=> {
        db.Material.destroy({
            where:{
                id:+req.body.whi
            }
        }).then(()=>{
            res.redirect("/formarmat/")
        }).catch(error => console.log(error))
        
    },
}
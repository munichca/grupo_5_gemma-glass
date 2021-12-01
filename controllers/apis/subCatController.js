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
        db.Shape.create({
            name:req.body.name
        })
        .then(result =>{
            if(result){
                return res.status(200).json({
                    msg: "created successfully",
                    status: 1
                })
            }else{
                return res.status(200).json({
                    msg: "no create"
                })
            }
        }).catch(error => console.log(error))
    },

    editShape: (req, res)=> {
                db.Shape.update({
                    name:req.body.name},{
                        where:{
                            id: req.params.id
                        }
                    }
                    ).then(result =>{
                        if(result){
                            return res.status(200).json({
                                msg: "updated successfully",
                                status : 1
                            })
                        }else{
                            return res.status(200).json({
                                msg: "no changes"
                            })
                        }
                    }).catch(error => console.log(error))
               
    },
    
    deleteShape: (req, res)=> {
        db.Shape.destroy({
            where:{
                id:+req.params.id
            }
        }).then(result =>{
            if(result){
                return res.status(200).json({
                    msg: "delete successfully",
                    status:1
                })
            }else{
                return res.status(200).json({
                    msg: "no changes"
                })
            }
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
        db.Brand.create({
            name:req.body.name
        })
        .then(result =>{
            if(result){
                return res.status(200).json({
                    msg: "created successfully",
                    status: 1
                })
            }else{
                return res.status(200).json({
                    msg: "no create"
                })
            }
        }).catch(error => console.log(error))
    },

    editBrand: (req, res)=> {
        db.Brand.update({
            name:req.body.name},{
                where:{
                    id: req.params.id
                }
            }
            ).then(result =>{
                if(result){
                    return res.status(200).json({
                        msg: "updated successfully",
                        status : 1
                    })
                }else{
                    return res.status(200).json({
                        msg: "no changes"
                    })
                }
            }).catch(error => console.log(error))
    },
    deleteBrand: (req, res)=> {
        db.Brand.destroy({
            where:{
                id:+req.params.id
            }
        }).then(result =>{
            if(result){
                return res.status(200).json({
                    msg: "delete successfully",
                    status:1
                })
            }else{
                return res.status(200).json({
                    msg: "no changes"
                })
            }
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
        db.Material.create({
            name:req.body.name
        })
        .then(result =>{
            if(result){
                return res.status(200).json({
                    msg: "created successfully",
                    status: 1
                })
            }else{
                return res.status(200).json({
                    msg: "no create"
                })
            }
        }).catch(error => console.log(error))
    },

    editMaterial: (req, res)=> {
        db.Material.update({
            name:req.body.name},{
                where:{
                    id: req.params.id
                }
            }
            ).then(result =>{
                if(result){
                    return res.status(200).json({
                        msg: "updated successfully",
                        status : 1
                    })
                }else{
                    return res.status(200).json({
                        msg: "no changes"
                    })
                }
            }).catch(error => console.log(error))
    },
    deleteMaterial: (req, res)=> {
        db.Material.destroy({
            where:{
                id:+req.params.id
            }
        }).then(result =>{
            if(result){
                return res.status(200).json({
                    msg: "delete successfully",
                    status:1
                })
            }else{
                return res.status(200).json({
                    msg: "no changes"
                })
            }
        }).catch(error => console.log(error))
        
    },
}
const db = require("../../database/models")
const { Op } = require("sequelize");
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
    createShape: (req, res)=> {
        db.Shape.create({
            name:req.body.subCatInput
        })
        .then((shape)=>{
            res.status(201).json({
                meta: {
                    endpoint: getUrl(req),
                    msg: "Resource Created"
                },
                data: shape,
            })
        }).catch(error => console.log(error))
        res.redirect('/formarmat/')
    },
    editShape: (req, res)=> {
                db.Shape.findByIdandUpdate({
                    name:req.body.subCatInput
                    
                 },{
                    where:{
                        id: +req.params.id
                    }
                }).then(()=>{
                    /* res.send(name) */
                    res.redirect("/formarmat/")
                })
                .catch(error => console.log(error))
                /*  */
    },
    deleteShape: (req, res)=> {
        
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
    createBrand: (req, res)=> {
        db.Brand.create({
            name:req.body.subCatInput
        })
        .then((brand)=>{
            res.status(201).json({
                meta: {
                    endpoint: getUrl(req),
                    msg: "Resource Created"
                },
                data: brand,
            })
        }).catch(error => console.log(error))
        res.redirect('/formarmat/')
    },
    editBrand: (req, res)=> {
        
    },
    deleteBrand: (req, res)=> {
        
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
    createMaterial: (req, res)=> {
        db.Material.create({
            name:req.body.subCatInput
        })
        .then((material)=>{
            res.status(201).json({
                meta: {
                    endpoint: getUrl(req),
                    msg: "Resource Created"
                },
                data: material,
            })
        }).catch(error => console.log(error))
        res.redirect('/formarmat/')
    },
    editMaterial: (req, res)=> {
        
    },
    deleteMaterial: (req, res)=> {
        
    },
}
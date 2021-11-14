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
        res.redirect('/administrator/#/1')
    },
    editShape: (req, res)=> {
        
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
}
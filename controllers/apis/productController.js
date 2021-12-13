const session = require("express-session")
const db = require("../../database/models")
const fs = require("fs")



const getUrl = (req) => {
    return `${req.protocol}://${req.get("host")}${req.originalUrl}`
}

module.exports = {
    list: (req, res)=> {
        db.Product.findAll ({
            include: [{ association: "category"},
                    { association: "shape"},
                    { association: "brand"},
                    { association: "material"},
                    { association: "image"}]
        }).then ((products) =>{
            session.getUrl= getUrl(req);
            /* res.send(products); */
            return res.json({
                meta: {
                    endpoint: getUrl(req),
                    status: 200,
                    total: products.length
                },
                data: products
            })
            
        }).catch(errors => console.log(errors))
    },
    detail:(req, res)=>{
        /* res.send(req.params.name) */
        db.Product.findOne({
            where :{name: req.params.name},
            include: [{ association: "category"},
            { association: "shape"},
            { association: "brand"},
            { association: "material"},
            { association: "image"}]
            
        }).then(products =>{

            return res.status(200).json({
                meta:{
                    endpoint:getUrl(req),
                    status: 200
                },
                data: products
            })
        }).catch(error => console.log(error))

    },
    search:(req, res)=>{
        db.Product.findOne({
            where :{id: req.params.id},
            include: [{ association: "category"},
            { association: "shape"},
            { association: "brand"},
            { association: "material"},
            { association: "image"}]
            
        }).then(products =>{

            return res.status(200).json({
                meta:{
                    endpoint:getUrl(req),
                    status: 200
                },
                data: products
            })
        }).catch(error => console.log(error))

    },

    /* ######################### */
    deleteProd: (req, res)=> {
        console.log("para por delete")
        db.Product.destroy({
            where:{
                id:+req.params.id
            }
        }).then(result =>{
            db.productImages.findAll({
                where:{
                    productId : +req.params.id
                }
            })
            .then(datos=>{
                
                datos.forEach(dato=>{
                   fs.unlink(`./image/productImages/.${dato.image[index].image}`)
                    db.productImages.destroy({
                        where:{
                            productId : +req.params.id
                        }
                       /*  res.send(dato.image[0].image); */
                         
                    })
                }) })


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
    
    /* ######################### */
    
}


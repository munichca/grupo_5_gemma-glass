
const db = require ("../database/models")
const {Op} = require("sequelize")
module.exports = {
    
    productCat: (req, res)=>{
        db.Product.findAll({
            where: {
                categoryId : req.params.id
                },
            
            include: [{ association: "category"},
                    { association: "shape"},
                    { association: "brand"},
                    { association: "material"},
                    { association: "image"}]
            })
        .then(producto =>{
            res.render("productos",{
                arrayProduct: producto,
                session: req.session
            })
        })
    },
    detail: (req, res)=>{   
        /*   {

        }else{

        } */
       db.Product.findAll({
       include: [ { association: "image"}],
          })
          
       .then((arrayProduct)=>{ 
         
        db.Product.findByPk(req.params.id, {
            include: [{ association: "category"},
            { association: "shape"},
            { association: "brand"},
            { association: "material"},
                { association: "image"}],
          })
        
        .then(producto =>{
            if(res.locals.user != undefined && res.locals.user.rol != 1 ){
                db.User.update({
                    include: [{ association: "prodId"}],
                    lastProdId: producto.id
                 },{
                    where:{
                        id: res.locals.user.id
                    }
                
              }).then(()=>{
                
                res.render("detalleProducto",{ 
                    productFind: producto,
                    arrayProduct,
                    session: req.session

              })
            })
            }else{
                res.render("detalleProducto",{ 
                    productFind: producto,
                    arrayProduct,
                    session: req.session
            })
              
        }
    })
    })
    
    },
    productOferta: (req, res) =>{
        
        db.Product.findAll({
            where:{
                discount:{
                    [Op.gte]:5,
                   
                }
            },
            order:[["discount","DESC"]],
            include:[{association: "image"}]
        })
        .then(arrayProduct =>{
            
            res.render("productos",{
                arrayProduct,
                session: req.session
            })
        })
        .catch(error => console.log(error))
    },
    proFormas: (req, res) =>{
        
        db.Product.findAll({
            where:{
                shapeId:+req.params.id
            },
            include:[{association: "image"}]
        })
        .then(arrayProduct =>{
            res.render("productos",{
                arrayProduct,
                session: req.session
            })
        })
    },
    proMarcas: (req, res) =>{
        db.Product.findAll({
            where:{
                brandId:+req.params.id
            },
            include:[{association: "image"}]
        })
        .then(arrayProduct =>{
            res.render("productos",{
                arrayProduct,
                session: req.session
            })
        })
    },
    proMaterial: (req, res) =>{
        db.Product.findAll({
            where:{
                materialId:+req.params.id
            },
            include:[{association: "image"}]
        })
        .then(arrayProduct =>{
            res.render("productos",{
                arrayProduct,
                session: req.session
            })
        })
    }
}
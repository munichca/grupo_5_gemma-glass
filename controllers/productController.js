/* let {productos, categoria, formas, marcas, materials } = require ('../data/dataBase'); */
const db = require ("../database/models")
const {Op} = require("sequelize")
/* const arrayProduct */
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
            /* res.send(producto) */
            res.render("productos",{ 
                /* productFind: producto, */
                arrayProduct: producto,
                session: req.session
            })
        })
    },
    detail: (req, res)=>{   
       db.Product.findAll({
       include: [{ association: "category"},
                    { association: "shape"},
                    { association: "brand"},
                    { association: "material"},
                    { association: "image"}],
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
            /* res.send(arrayProduct) */
            res.render("detalleProducto",{ 
                productFind: producto,
                arrayProduct,
                session: req.session
            })
        })
    })
    
    },
    productOferta: (req, res) =>{
        db.Product.findAll({
            where:{
                discount:{
                    [Op.gte]:20
                }
            },
            include:[{association: "image"}]
        })
        .then(arrayProduct =>{
            res.render("productos",{
                arrayProduct,
                session: req.session
            })
        })
        /* let arrayProduct = productos.filter(prod => prod.discount > 0);        

        res.render("productos",{
            arrayProduct, categoria, formas, marcas, materials,
            session: req.session
        }) */
    },
    proFormas: (req, res) =>{
        let forma = +req.params.id;
        let arrayProduct = productos.filter(prod => prod.subCatForma === forma);    
        /* res.send(formas) */    
        res.render("productos",{
            arrayProduct, categoria, formas, marcas,
            session: req.session
        })
    },
    proMarcas: (req, res) =>{
        let marca = +req.params.id;
        let arrayProduct = productos.filter(prod => prod.subCatMarca === marca);    
        /* res.send(marcas) */    
        res.render("productos",{
            arrayProduct, categoria, formas, marcas,
            session: req.session
        })
    }
}
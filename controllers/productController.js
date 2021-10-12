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
    /*  */
        /* let productId = +req.params.id;
        let productFind = productos.find(prod => prod.id === productId);
        let categ = categoria.find(cate => cate.id === productFind.category);
        let forma = formas.find(forma =>forma.id === productFind.subCatForma);
        let marca = marcas.find(marca => marca.id === productFind.subCatMarca);
        let material = materials.find(material => material.id === productFind.subCatmaterial);
        let arrayProduct = productos;
        res.render("detalleProducto",{
            arrayProduct, categoria, productFind, categ, forma, marca, material,
            session: req.session
        }) */
    },
    productOferta: (req, res) =>{
        let arrayProduct = productos.filter(prod => prod.discount > 0);        

        res.render("productos",{
            arrayProduct, categoria, formas, marcas, materials,
            session: req.session
        })
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
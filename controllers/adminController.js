/* const { localsName } = require('ejs'); */
const db = require('../database/models');
const fs = require('fs').promises
let {validationResult} = require ("express-validator");
const session = require('express-session');
module.exports = {
    adminRol:(req, res)=>{
        if (req.session.user.rol == 100){
            res.render("adminRol", {
                
                session: req.session
            })
        }else{
            res.redirect('/administrator')
        }
    },
    add: (req, res) => {        
            db.Category.findAll()
            .then(categories => {
                if (req.session.user.rol === 100 || req.session.user.rol === 1 ) {
                    res.render("add", {
                        categories,
                        session: req.session
                    })
                } else {
                    res.redirect('/')
                }
            })
    },
    nuevoProducto: (req, res) => {
        console.log("chau mundo")
        let arrayImages = [];
        if (req.files) {
            req.files.forEach(image => {
                arrayImages.push(image.filename)
            })
        }
        let errors = validationResult(req)
        if(errors.isEmpty()){
        let {name, price, discount, categoryId, shapeId, brandId, materialId, height, width, description} = req.body;
            db.Product.create({name, price, discount, categoryId, shapeId, brandId, materialId, height, width, description})
            /* res.send(req.body) */
            .then(product =>{
                
                if(arrayImages.length > 0){
                    let images = arrayImages.map(image => {
                        return {
                            images: image,
                            productId: product.id
                        }
                    })
                    db.productImages.bulkCreate(images)
                      .then(() => res.redirect('/administrator'))
                      .catch(err => console.log(err))
                }
                res.redirect('/administrator')
            }) 
        }else{
            db.Category.findAll()
            .then(categories => {
                /* session= req.session
                res.send(session) */
                if (req.session.user.rol === 1) {
                    res.render("add", {
                        categories,
                        errors: errors.mapped(),
                        session: req.session
                    })
                } else {
                    res.redirect('/')
                }
            })
        }
    },
    edit: (req, res) => {
        let productP = db.Product.findByPk(+req.params.id,{
            include: [{ association: "image"}]
        })
            .then(product => { 
                db.productImages.findAll({
                    where:{
                        productId : +req.params.id
                    }
                })
                .then(images =>{
                    
                    let imageArray= [];
                    imageArray = images;
                    session.arrayImages= images;
                if (req.session.user.rol === 100 || req.session.user.rol === 1) {
                    let errors = validationResult(req);
                    session.product = product;
                    session.errors = errors;
                    res.render("edicion", {
                        product,
                        imageArray,
                        errors,
                        session: req.session
                    })
                } else {
                    res.redirect('administrator')
                }
            })})
    },
    edicion: (req, res) => {
        let errors = validationResult(req)
        let arrayImages = [];
        if (req.files) {
            req.files.forEach(image => {
                arrayImages.push(image.filename)
            })
        }
        /* res.send(errors) */
        let{id, name, price, discount, height, width, description } = req.body
        let categoryP = db.Category.findOne({
            where:{ name: req.body.category  }})
        let shapeP = db.Shape.findOne({
            where:{ name: req.body.shape  }})
        let brandP = db.Brand.findOne({
            where:{ name: req.body.brand  }})
        let materialP = db.Material.findOne({
            where:{ name: req.body.material  }})
        Promise.all([categoryP, shapeP, brandP, materialP])
        .then(([categories, shapes, brands, materials])=>{
                
        if(errors.isEmpty()){
            db.Product.update({name,price, discount, categoryId: categories.id, shapeId: shapes.id, brandId: brands.id, materialId: materials.id, height, width, description }, {
                where:{
                    id : +req.params.id
                }  })
            .then(() =>{
                if(arrayImages.length > 0){
                    
                    let images = arrayImages.map(image => {
                        return {
                            images: image,
                            productId: +req.params.id
                        }
                    })
                    /* ############ */
                    db.productImages.findAll({
                        where:{
                            productId : +req.params.id
                        }
                    })
                    .then(datos=>{
                        
                        datos.forEach(dato=>{
                            db.productImages.destroy({
                                where:{
                                    productId : +req.params.id
                                }
                            })
                        }),//aca van los })
                        db.productImages.bulkCreate(images)
                      .then(() => res.redirect('/administrator'))
                      .catch(err => console.log(err))
                    })
                }else{
                    let images = arrayImages.map(image => {
                        return {
                            images: image,
                            productId: +req.params.id
                        }
                    });
                    db.productImages.bulkCreate(images)
                      .then(() => res.redirect('/administrator'))
                      .catch(err => console.log(err))
                }
            })}else{
                /* res.send(errors.mapped()) */
                 if (req.session.user.rol == 1) {
                   /* let errors = errors.mapped(); */
                    
                    
                            res.render("edicion", {
                               
                               product:session.product,
                               imageArray:session.arrayImages,
                               errors: errors.mapped(),
                               session: req.session
                           })
                       } else {
                           res.redirect('/admin/administrator')
                       }} 
        })
    
        

    },
    lista: (req, res) => {
        db.Product.findAll({
            include: [{ association: "category"},
            { association: "shape"},
            { association: "brand"},
            { association: "material"},
                { association: "image"}],
        })
            
            .then(products => {
                if (req.session.user.rol === 1) {
                    
                    res.render("administrator", {
                        products,
                        session: req.session
                    })
                } else {
                    res.redirect('/')
                }
            })
    },
    /* ########################################## */
    // importa el módulo de node `file-system`


/* fs.unlink('./old-article.md')
  .then(() => {
    console.log('File removed')
  }).catch(err => {
    console.error('Something wrong happened removing the file', err)
  }) */
    /* ########################################## */
    borrarProducto: (req, res) => {
        res.send(req.params.id)
        db.Product.destroy({
            where: {
                id: +req.params.id
            }
        })
        
        .then(()=>{
            db.productImages.findAll({
                where:{
                    productId : +req.params.id
                }
            })
            .then(datos=>{
                res.send(datos);
                datos.forEach(dato=>{
                    db.productImages.destroy({
                        where:{
                            productId : +req.params.id
                        }
                    })
                }) })



            res.redirect('/admin/administrator/')
        })
        .catch(err => console.log(err))
    },
}
const { localsName } = require('ejs');
const db = require('../database/models');
const { report } = require('../routes/home');
let {validationResult} = require ("express-validator");
module.exports = {
    
    add: (req, res) => {        
            db.Category.findAll()
            .then(categories => {
                if (req.session.user.rol === 1) {
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
        let arrayImages = [];
        if (req.files) {
            req.files.forEach(image => {
                arrayImages.push(image.filename)
            })
        }
        let errors = validationResult(req)
        if(errors.isEmpty()){
        let {name, price, discount, categoryId, shapeId, brandId, materialId, height, width} = req.body;
            db.Product.create({name, price, discount, categoryId, shapeId, brandId, materialId, height, width })
            .then(product =>{
                if(arrayImages.length > 0){
                    let images = arrayImages.map(image => {
                        return {
                            images: image,
                            productId: product.id
                        }
                    })
                    db.productImages.bulkCreate(images)
                      .then(() => res.redirect('/admin/listado'))
                      .catch(err => console.log(err))
                }
                res.redirect('/admin/listado')
            }) 
        }else{
            db.Category.findAll()
            .then(categories => {
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
                if (req.session.user.rol === 1) {
                    res.render("edicion", {
                        product,
                        session: req.session
                    })
                } else {
                    res.redirect('/')
                }
            })
    },
    edicion: (req, res) => {
        let arrayImages = [];
        if (req.files) {
            req.files.forEach(image => {
                arrayImages.push(image.filename)
            })
        }
        let{id, name, price, discount, height, width } = req.body
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
            db.Product.update({
                name,
                price,
                discount,
                categoryId: categories.id,
                shapeId: shapes.id,
                brandId: brands.id,
                materialId: materials.id,
                height,
                width
            },
                {
                where:{
                    id : +req.params.id
                }
            })
            .then(() =>{
                if(arrayImages.length > 0){
                    let images = arrayImages.map(image => {
                        return {
                            images: image,
                            productId: +req.params.id
                        }
                    })
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
                        }),
                        db.productImages.bulkCreate(images)
                      .then(() => res.redirect('/admin/listado'))
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
                      .then(() => res.redirect('/admin/listado'))
                      .catch(err => console.log(err))
                }
            })
        })
    },
    lista: (req, res) => {
        db.Product.findAll()
            .then(products => {
                if (req.session.user.rol === 1) {
                    res.render("listado", {
                        products,
                        session: req.session
                    })
                } else {
                    res.redirect('/')
                }
            })
    },
    borrarProducto: (req, res) => {
        db.Product.destroy({
            where: {
                id: +req.params.id
            }
        })
        .then(()=>{
            res.redirect('/admin/listado/')
        })
        .catch(err => console.log(err))
    },
}
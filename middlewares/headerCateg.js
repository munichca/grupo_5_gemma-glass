let db = require ("../database/models")
module.exports = (req, res, next) =>{
    db.Category.findAll()
    .then(categories =>{
        res.locals.categories = categories
        next()
    }),
    db.Shape.findAll()
    .then(shapes =>{
        res.locals.shapes = shapes
    }),
    db.Brand.findAll()
    .then(brands =>{
        res.locals.brands = brands
    }),
    db.Material.findAll()
    .then(materials =>{
        res.locals.materials = materials
    })

}
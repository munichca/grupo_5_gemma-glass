let {check, body} = require ("express-validator");

const db = require("../database/models");


module.exports =[
    check("name")
    .notEmpty()
    .withMessage("El nombre es obligatorio").bail()
    .isLength({ min: 3})
    .withMessage("Ingrese mas de 2 caracteres"),
    body('name')
    .custom(value=>{
            return db.Product.findOne({
                where:{
                    name:value,
                }
            })
            .then(nam =>{
                if (nam){
                    return Promise.reject("Ya existe un producto con ese nombre")
                }
            })

        
    }),

    check("price")
    .notEmpty()
    .withMessage("Debe cargar el precio")
    .isDecimal()
    .withMessage("El campo debe ser numérico"),
    
    check("height")
    .notEmpty()
    .withMessage("Debe indicar el alto del lente")
    .isDecimal()
    .withMessage("El campo debe ser numérico"),
    check("width")
    .notEmpty()
    .withMessage("Debe indicar el ancho del lente")
    .isDecimal()
    .withMessage("El campo debe ser numérico"),
]
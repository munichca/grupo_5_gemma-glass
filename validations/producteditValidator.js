let {check} = require ("express-validator");

const db = require("../database/models");


module.exports =[
    check("name")
    .notEmpty()
    .withMessage("El nombre es obligatorio").bail()
    .isLength({ min: 3})
    .withMessage("Ingrese mas de 2 caracteres"),
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
    .withMessage("El campo debe ser numérico")
]
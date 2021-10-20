let {check, body} = require ("express-validator");

const db = require("../database/models");


module.exports =[
    check("name")
    .notEmpty()
    .withMessage("El nombre es obligatorio").bail()
    .isLength({ min: 3})
    .withMessage("Ingrese un nombre con mas de 2 caracteres"),
    check("price")
    .notEmpty()
    .withMessage("Debe cargar el precio"),
    
    check("discount")
    .notEmpty()
    .withMessage("Elija un descuento 0, 5, 10, 15, 20 ó 25 %"),
    check("height")
    .notEmpty()
    .withMessage("debe indicar el alto del lente"),
    check("width")
    .notEmpty()
    .withMessage("debe indicar el ancho del lente"),
]
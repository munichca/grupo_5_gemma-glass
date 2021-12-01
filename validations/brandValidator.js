let {check, body} = require ("express-validator");

const db = require("../database/models");


module.exports =[
    check("subCatInput")
    .notEmpty()
    .withMessage("El nombre del campo es obligatorio").bail()
    .isLength({ min: 3})
    .withMessage("El campo debe tener mas de dos caracteres"),
    body('subCatInput')
    .custom(value=>{
            return db.Brand.findOne({
                where:{
                    name:value,
                }
            })
            .then(nam =>{
                if (nam){
                    return Promise.reject("El recurso ya existe, modifique el nombre")
                }
            })

        
    }),
]
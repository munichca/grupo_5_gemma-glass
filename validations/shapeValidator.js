let {check, body} = require ("express-validator");

const db = require("../database/models");


module.exports =[
    check("subCatInput")
    .notEmpty()
    .withMessage("El nombre del campo es obligatorio back").bail()
    .isLength({ min: 3})
    .withMessage("El campo debe tener mas de dos caracteres back"),
    body('subCatInput')
    .custom(value=>{
            return db.Shape.findOne({
                where:{
                    name:value,
                }
            })
            .then(nam =>{
                if (nam){
                    return Promise.reject("El recurso ya existe, modifique el nombre back")
                }
            })

        
    }),
]
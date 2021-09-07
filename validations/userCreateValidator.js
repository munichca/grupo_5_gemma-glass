let {check} = require ("express-validator");


module.exports =[
    check("name")
    .notEmpty()
    .withMessage("El nombre es obligatorio")
    .isLength({ min: 3})
    .withMessage("Ingrese un nombre con mas de 2 caracteres")
    .isAlpha()
    .withMessage("El nombre no puede contener numeros"),
    check("lastName")
    .notEmpty()
    .withMessage("El nombre es obligatorio")
    .isLength({ min: 3})
    .withMessage("Ingrese un nombre con mas de 2 caracteres")
    .isAlpha()
    .withMessage("El nombre no puede contener numeros"),
    check("email")
    .notEmpty()
    .withMessage("El e-mail es obligatorio")
    .isEmail()
    .withMessage("Ingrese un e-mail valido"),
    check("phone")
    .isNumeric(true)
    .withMessage("el telefono solo puede contener numeros"),
    check("pass")
    .notEmpty()
    .withMessage("La conrtaseña es obligatoria"),
    
    


]
let {check, body} = require ("express-validator");
const {users} = require('../data/dataBase')


module.exports =[
    check("name")
    .notEmpty()
    .withMessage("El nombre es obligatorio").bail() /* si el campo esta vacio no sigue leyendo las siguientes validaciones */
    .isLength({ min: 3})
    .withMessage("Ingrese un nombre con mas de 2 caracteres")
    .isAlpha()
    .withMessage("El nombre no puede contener numeros"),
    check("lastName")
    .notEmpty()
    .withMessage("El apellido es obligatorio")
    .isLength({ min: 3})
    .withMessage("Ingrese un apellido con mas de 2 caracteres")
    .isAlpha()
    .withMessage("El apellido no puede contener numeros"),
    check("email")
    .notEmpty()
    .withMessage("El e-mail es obligatorio")
    .isEmail()
    .withMessage("Ingrese un e-mail valido"),

/*Si el email está registrado true, sino false */
    body('email')
    .custom(value=>{
        let user = users.find(user=> user.email === value)
        if(user === undefined){
            return true
        }else{
            return false
        }
    })
    .withMessage('Email ya registrado'),



    check("phone")
    .notEmpty()
    .withMessage("Debe ingresar un telefono")
    .isNumeric(true)
    .withMessage("el telefono solo puede contener numeros"),
    check("pass")
    .notEmpty()
    .withMessage("La conrtaseña es obligatoria"),
    check("terms")
    .isString("on")
    .withMessage("Debe aceptar los Terminos y Condiciones"),
    body("pass2").custom((value, {req})=> value !== req.body.pass ? false : true)
    .withMessage("¡Las contraseñas no coinciden!")
    

    
    


]
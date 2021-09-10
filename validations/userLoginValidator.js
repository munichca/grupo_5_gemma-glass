let {check, body} = require ("express-validator");
let {users} = require ("../data/dataBase")
let bcrypt= require('bcryptjs')

module.exports =[
    
    check("email")
        .notEmpty()
        .withMessage("El e-mail es obligatorio")
        .isEmail()
        .withMessage("Ingrese un e-mail válido"),
    body("email")
        .custom(value =>{
            let user = users.find(user => user.email === value)
            if (user !== undefined){
                return true
            }else{
              return  false
            }
        })
        .withMessage("E-mail no registrado"),


    check("pass")
        .notEmpty()
        .withMessage("La conrtaseña es obligatoria"),
    
    body('pass')
    .custom((value,{req})=>{
        let user= users.find(user=> user.email === req.body.email)
        return bcrypt.compareSync(value,user.pass)
    })
    .withMessage('Contraseña inválida')


]
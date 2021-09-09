let {check, body} = require ("express-validator");
let {users} = require ("../data/dataBase")

module.exports =[
    
    check("email")
        .notEmpty()
        .withMessage("El e-mail es obligatorio")
        .isEmail()
        .withMessage("Ingrese un e-mail valido"),
    body("email")
        .custom(value =>{
            let user = users.find(user => user.email === value)
            if (user !== undefined){
                true
            }else{
                false
            }
        })
        .withMessage("E-mail no registrado"),
    check("pass")
        .notEmpty()
        .withMessage("La conrtaseña es obligatoria"),
    
    
    


]
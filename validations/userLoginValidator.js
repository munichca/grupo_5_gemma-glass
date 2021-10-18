let {check, body} = require ("express-validator");
let db = require ("../dataBase/models")
let bcrypt= require('bcryptjs')

module.exports =[
    
    check("email")
        .notEmpty()
        .withMessage("El e-mail es obligatorio")
        .isEmail()
        .withMessage("Ingrese un e-mail válido"),
    
    body("pass").custom((value, { req }) => {
        return db.User.findOne({
          where: {
            email: req.body.email,
          },
        })
          .then((user) => {
            
            if (!bcrypt.compareSync(req.body.pass, user.dataValues.pass)) {
              return Promise.reject();
             
            }
          })
          .catch((errors) => {
            return Promise.reject("Credenciales inválidas");
          });
      }),

]
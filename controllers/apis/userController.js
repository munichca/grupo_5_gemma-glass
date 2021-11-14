const session = require("express-session")
const db = require("../../database/models")
const { Op } = require("sequelize");



const getUrl = (req) => {
    return `${req.protocol}://${req.get("host")}${req.originalUrl}`
}

module.exports = {
    superUser: (req, res)=> {
        db.User.findOne({where:{
            id : req.params.id,
            rol:{
                [Op.eq]:100
            }
        }
        }).then ((user) =>{
            
                session.getUrl= getUrl(req);
                return res.status(200).json({
                    meta: {
                        endpoint: getUrl(req),
                        status: 200,
                        
                    },
                    data: user
                })
          
                
            
            
            
        }) /* aca termina el then */
        .catch(errors => console.log(errors))
    },
   
    
}
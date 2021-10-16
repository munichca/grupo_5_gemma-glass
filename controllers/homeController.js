
const db = require("../database/models")
const {Op} = require("sequelize")
module.exports = {
    home: (req, res)=>{
        db.Product.findAll({
            where: {
                discount: {
                    [Op.gte]:5
                }
            },
            include: [{ association: "category"},
                    { association: "shape"},
                    { association: "brand"},
                    { association: "material"},
                    { association: "image"}]
        })
        .then(productos =>{
            
            res.render("home",{ 
                arrayProduct: productos,               
                session: req.session
            })
        })
        .catch(err => console.log(err))
    },
    turnos: (req, res)=>{
        res.render("turnos",{
            
            session: req.session
        })
    },
    trolley: (req, res)=>{
        res.render("carrito",{
            
            session: req.session
        })
    },
    search: (req, res) => {
        db.Product.findAll({
            include: [{ association: "category"},
                    { association: "shape"},
                    { association: "brand"},
                    { association: "material"},
                    { association: "image"}],
            where: {
                
                name:{
                    [Op.like] :`%${req.query.keywords}%`
                }
            }
        })
        .then(prod =>{
            res.render("results",{
                arrayProduct:prod,
                
                search: req.query.keywords,
                session: req.session
            })
        })

	},
    

}
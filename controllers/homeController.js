
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
                /* categoria , */
                session: req.session
            })
        })
        .catch(err => console.log(err))
        /* let arrayProduct = productos;
         res.render("home",{ 
            arrayProduct,
            categoria ,
            session: req.session
        }) */
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



		/* let searchResult = []
        
        Product.forEach(product => {
            if(product.name.toLowerCase().includes(req.query.keywords.toLowerCase() ) ){
                searchResult.push(product)
            }
        }); */
        
        /* res.send(searchResult) */
        /* let arrayProduct=searchResult;
        
        
        res.render('results', {
			arrayProduct, 
            categoria,
			search: req.query.keywords,
            session: req.session
		}) */
	},
    

}
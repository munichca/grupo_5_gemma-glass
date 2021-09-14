let {productos, categoria, subCatForma, subCatMarca, subCatMaterial} = require ('../data/dataBase');

module.exports = {
    home: (req, res)=>{
        
        let arrayProduct = productos;
         res.render("home",{             
            arrayProduct,
            categoria ,
            session: req.session           
            
            /* product,
            categ,
            formas,
            marcas,
            materials   */ 
        })
    },
    turnos: (req, res)=>{
        res.render("turnos",{
            categoria ,
            session: req.session
        })
    },
    trolley: (req, res)=>{
        res.render("carrito",{
            categoria,
            session: req.session
        })
    },
    search: (req, res) => {
		let searchResult = []
        
        productos.forEach(product => {
            if(product.name.toLowerCase().includes(req.query.keywords.toLowerCase() ) ){
                searchResult.push(product)
            }
        });
        
        /* res.send(searchResult) */
        let arrayProduct=searchResult;
        
        
        res.render('results', {
			arrayProduct, 
            categoria,
			search: req.query.keywords,
            session: req.session
		})
	},
    

}
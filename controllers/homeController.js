let {productos, categoria,formas,marcas, subCatForma, subCatMarca, subCatMaterial} = require ('../data/dataBase');

module.exports = {
    home: (req, res)=>{
        
        let arrayProduct = productos;
         res.render("home",{             
            arrayProduct,
            categoria            
            
            /* product,
            categ,
            formas,
            marcas,
            materials   */ 
        })
    },
    turnos: (req, res)=>{
        res.render("turnos",{
            categoria 
        })
    },
    trolley: (req, res)=>{
        res.render("carrito",{
            categoria
        })
    },
    search: (req,res)=>{
        let result=[];
        productos.forEach(product => {
            if(product.name.toLowerCase().includes(req.query.keywords.toLowerCase())/* ||product.category.toLowerCase().includes(req.query.keywords.toLowerCase()) */){
                result.push(product);
            }

        });
/*       categoria.forEach(x  =>{
            if(x.name.toLowerCase().includes(req.query.keywords.toLowerCase())){
                result.push(x)
            }
        })  */

        res.render('results', {
            result,
            categoria,
            formas,
            marcas,
            search: req.query.keywords
        })
    }
    

}
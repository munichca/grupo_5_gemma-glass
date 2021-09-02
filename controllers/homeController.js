let {productos, categoria, subCatForma, subCatMarca, subCatMaterial} = require ('../data/dataBase');

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
    }
    

}
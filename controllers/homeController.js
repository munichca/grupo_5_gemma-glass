let {productos, categoria, subCatForma, subCatMarca, subCatMaterial} = require ('../data/dataBase');

module.exports = {
    home: (req, res)=>{
        /* let productId = +req.params.id;
        let product = products.find(product => product.id === productId);
        let categ = category.find(item => item.id === +product.category);
        let formas = subCatForma.find(forma => forma.id === +product.subCatForma);
        let marcas = subCatMarca.find(marca => marca.id === +product.subCatMarca);
        let materials = subCatMaterial.find(item2 => item2.id === +product.subCatmaterial); */
        
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
    product: (req, res)=>{
        
        
        res.render("productos",{            
            productos,
            categoria
            
        })
    },

}
let {productos, categoria } = require ('../data/dataBase');

module.exports = {
    product: (req, res)=>{
        let categName = req.params.id;
        let categoria = productos.find(prod => prod.category === categName);
         res.render("productos",{
            productos,
            categoria           
         })
    },
    productCat: (req, res)=>{
        let categName = req.params.id;
        let categoria = productos.find(prod => prod.category === categName);
        
        res.render("productos",{            
            productos,
            categoria
            
            
        })
    },
    detail: (req, res)=>{
        let productId = +req.params.id;
        let product = productos.find(prod => prod.id === productId);
        
        res.render("detalleProducto",{
            productos,
            categoria,
            product
        })
    }

}
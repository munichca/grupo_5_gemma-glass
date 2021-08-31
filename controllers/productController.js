let {productos, categoria, formas, marcas, materials } = require ('../data/dataBase');

module.exports = {
    
    productCat: (req, res)=>{
        let caca = [];
        let categName = req.params.id;
        
        let product = productos.filter(product => product.category === +categName);
        let arrayProduct = product;
        
        res.render("productos",{            
            arrayProduct,
            categoria, formas, marcas, materials
            
            
        })
    },
    detail: (req, res)=>{
        let productId = +req.params.id;
        let productFind = productos.find(prod => prod.id === productId);
        let categ = categoria.find(cate => cate.id === productFind.category);
        let forma = formas.find(forma =>forma.id === productFind.subCatForma);
        let marca = marcas.find(marca => marca.id === productFind.subCatMarca);
        let material = materials.find(material => material.id === productFind.subCatmaterial);
        let arrayProduct = productos;
        res.render("detalleProducto",{
            arrayProduct,
            categoria,
            productFind,
            categ,
            forma,
            marca,
            material
        })
    }
}
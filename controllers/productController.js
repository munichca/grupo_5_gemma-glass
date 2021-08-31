let {productos, categoria, formas, marcas, materials } = require ('../data/dataBase');

module.exports = {
    
    productCat: (req, res)=>{
        
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
    },
    productOferta: (req, res) =>{
        let arrayProduct = productos.filter(prod => prod.discount > 0);        

        res.render("productos",{
            arrayProduct,
            categoria, formas, marcas, materials
        })
    },
    productForma: (req, res) =>{
        let forma = +req.params.id;
        let arrayProduct = productos.filter(prod => prod.subCatForma === forma);    
        /* res.send(formas) */    
        res.render("productos",{
            arrayProduct,
            categoria,
            formas
        })
    }
}
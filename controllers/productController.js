let {productos , category, subCatForma, subCatMarca, subCatMaterial} = require ('../data/dataBase');

module.exports = {
    product: (req, res)=>{
       
         res.render("productos",{
            productos,
            category,
            subCatForma,
            subCatMarca,
            subCatMaterial            
         })
    },
    productCat: (req, res)=>{
        /* let categName = req.params.name;
        let categ = category.find(categ => categ.mane === categName);
        let categId = categ.id;
        let product = productos.filter(product => product.category === categId);        
        let formas = subCatForma.find(forma => forma.id === product.subCatForma);
        let marcas = subCatMarca.find(marca => marca.id === product.subCatMarca);
        let materials = subCatMaterial.find(item2 => item2.id === product.subCatmaterial);
        productos = product; */
        res.render("productos",{            
            category,
            subCatForma,
            subCatMarca,
            subCatMaterial,
            productos
            /* categ, */
            /* product, */
           /*  formas,
            marcas,
            materials */
        })
    },
    detail: (req, res)=>{
        let productId = +req.params.id;
        let product = productos.find(prod => prod.id === productId);
        let categ = category.find(item => item.id === product.category);
        let formas = subCatForma.find(forma => forma.id === product.subCatForma);
        let marcas = subCatMarca.find(marca => marca.id === product.subCatMarca);
        let materials = subCatMaterial.find(item2 => item2.id === product.subCatmaterial);
        res.render("detalleProducto",{
            productos,
            category,
            subCatForma,
            subCatMarca,
            subCatMaterial,
            product,
            categ,
            formas,
            marcas,
            materials 
        })
    }

}
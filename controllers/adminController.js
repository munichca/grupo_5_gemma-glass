let {productos, categoria, formas, marcas, materials} = require ('../data/dataBase');
module.exports = {
    add: (req, res)=>{
         res.render("add",{
            categoria
         })
    },
    
    lista: (req, res)=>{
        
        
        
        res.render("listado",{
            categoria,
           productos, formas, marcas, materials

        })
    },
    edit: (req, res)=>{
        let productoAEditar = productos.find(producto => producto.id === +req.params.id);
        let categ = categoria.find(cate => cate.id === productoAEditar.id);
        let forma = formas.find(forma => forma.id === productoAEditar.subCatForma);
        let marca = marcas.find(marca => marca.id === productoAEditar.subCatMarca);
        let material = materials.find(material => material.id === productoAEditar.subCatmaterial)
       /* res.send(productoAEditar); */
         res.render("edicion",{
            productoAEditar, categoria, formas, marcas, materials, categ, forma, marca,material
        })
    },
    update: (req, res)=>{
        productos.forEach(producto =>{
            if (producto.id === +req.params.id){
                producto.id = producto.id,
                producto.name = req.body.nombre ? req.body.nombre : producto.name,
                producto.price = req.body.price ? req.body.price : producto.price,
                producto.discount = req.body.discount ? req.body.discount : producto.discount,                
                producto.category = req.body.categorias ? req.body.categorias : producto.category,
                producto.subCatForma = req.body.shape ? req.body.shape : producto.subCatForma,
                producto.subCatMarca = req.body.brand ? req.body.brand : producto.subCatMarca,
                producto.subCatmaterial = req.body.material ? req.body.material : producto.subCatmaterial,
                producto.height = req.body.height ? req.body.height : producto.height,
                producto.width = req.body.width ? req.body.width : producto.width


            }
        })
        writeJson(productos)
        res.redirect("/listado")
    },
    borrarProducto:(req, res)=> {
        productos.forEach(producto => {
            let productoAEliminar = productos.indexOf(producto)
            productos.splice(productoAElininar, 1)
        })
        writeJson(productos)

        res.redirect('/listado/')
    }
}
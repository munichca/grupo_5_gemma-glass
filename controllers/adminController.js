
let {productos, categoria, formas, marcas, materials, writeJson} = require ('../data/dataBase');
const { report } = require('../routes/home');
module.exports = {
    add: (req, res)=>{
         res.render("add",{
            categoria
         })
    },
    
    lista: (req, res)=>{
        res.render("listado",{
            productos, categoria, formas, marcas, materials
        })
    },
    edit: (req, res)=>{
        let productoAEditar = productos.find(producto => producto.id === +req.params.id);
        let categ = categoria.find(cate => cate.id === productoAEditar.category);
        let forma = formas.find(forma => forma.id === productoAEditar.subCatForma);
        let marca = marcas.find(marca => marca.id === productoAEditar.subCatMarca);
        let material = materials.find(material => material.id === productoAEditar.subCatmaterial)
       /* res.send(productoAEditar); */
         res.render("edicion",{
            productoAEditar, categoria, formas, marcas, materials, categ, forma, marca,material
        })
    },
    update: (req, res)=>{
        /* res.send(req.body) */
        /* productos.forEach(producto =>{
            if (producto.id === +req.params.id){ */
            let producto = productos.find(producto => producto.id === +req.params.id)
            let categ = categoria.find(categ => categ.name === req.body.category)
            let forma = formas.find(forma => forma.shape === req.body.shape)
            let marca = marcas.find(marca => marca.brand === req.body.brand)
            let material = materials.find(material => material.mater === req.body.material)
                producto.id = producto.id,
                producto.name = req.body.nombre ? req.body.nombre : producto.name,
                producto.price = req.body.price ? req.body.price : producto.price,
                producto.discount = req.body.discount ? req.body.discount : producto.discount, 
                              
                producto.category = categ.id,
                producto.subCatForma = forma.id,
                producto.subCatMarca =  marca.id,
                producto.subCatmaterial = material.id,
                producto.height = req.body.height ? req.body.height : producto.height,
                producto.width = req.body.width ? req.body.width : producto.width


            /* } */
       /*  }) */
        /* res.send(producto); */
        writeJson(productos)
        res.redirect("/admin/listado")
    },
    borrarProducto:(req, res)=> {
        /* res.send(req.params.id) */
        productos.forEach(producto => {
            if(producto.id === +req.params.id){
            let productoAEliminar = productos.indexOf(producto);
            productos.splice(productoAEliminar, 1)
        }
        })
        writeJson(productos)

        res.redirect('/admin/listado/')
    }
}
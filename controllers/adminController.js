
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
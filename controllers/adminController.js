let {productos, categoria, formas, marcas, materials} = require ('../data/dataBase');
module.exports = {
    add: (req, res)=>{
         res.render("add",{
            categoria
         })
    },
    edit: (req, res)=>{
        res.render("edicion",{
            categoria, formas, marcas, materials
        })
    },
   
    lista: (req, res)=>{
        let prod = productos;
        
        
        res.render("listado",{
            categoria,
            prod, formas, marcas, materials

        })
    }

}
let {productos, categoria, subCatForma, subCatMarca, subCatMaterial} = require ('../data/dataBase');
module.exports = {
    add: (req, res)=>{
         res.render("add",{
            categoria
         })
    },
    edit: (req, res)=>{
        res.render("edit",{
            categoria
        })
    },
    lista: (req, res)=>{
        let prod = productos;
        
        
        res.render("listado",{
            categoria,
            prod

        })
    }

}
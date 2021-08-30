let {productos, category, subCatForma, subCatMarca, subCatMaterial} = require ('../data/dataBase');
module.exports = {
    add: (req, res)=>{
         res.render("add",{
            category
         })
    },
    edit: (req, res)=>{
        res.render("edicion",{
            category
        })
    },
    lista: (req, res)=>{
        let prod = productos;
        
        
        res.render("listado",{
            category,
            prod

        })
    }

}
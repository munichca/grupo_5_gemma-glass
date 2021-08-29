let {category} = require ('../data/dataBase');
module.exports = {
    add: (req, res)=>{
         res.render("add",{
            category
         })
    },
    edit: (req, res)=>{
        res.render("edit",{
            category
        })
    }

}
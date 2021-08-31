let {productos, categoria,writeProductsJSON} = require ('../data/dataBase');
module.exports = {
    add: (req, res)=>{
         res.render("add",{
            categoria
         })
    },
  edit: (req, res) => {
        let product = productos.find(product => {
            return product.id === +req.params.id})
        res.render('edicion', {
            categoria, 
            product
        })
    },
edicion: (req, res) => {
        let {
            name, 
            price, 
            discount, 
            category, 
            shape,
            brand,
            material,
            heigth,
            width
            
            } = req.body;
        
        productos.forEach( product => {
            if(product.id === +req.params.id){
                product.id = product.id,
                product.name = name,
                product.price = price,
                product.discount = discount,
                product.category = category,
                product.shape = shape,
                product.brand = brand,
                product.material = material,
                product.heigth = heigth,
                product.width = width
            }
        })

        writeProductsJSON(productos)

        res.redirect('/admin/listado')
    },



   
    lista: (req, res)=>{
        let prod = productos;
        
        
        res.render("listado",{
            categoria,
            prod

        })
    }

}
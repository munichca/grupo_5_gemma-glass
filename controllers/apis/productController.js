const session = require("express-session")
const db = require("../../database/models")




const getUrl = (req) => {
    return `${req.protocol}://${req.get("host")}${req.originalUrl}`
}

module.exports = {
    list: (req, res)=> {
        db.Product.findAll ({
            include: [{ association: "category"},
                    { association: "shape"},
                    { association: "brand"},
                    { association: "material"},
                    { association: "image"}]
        }).then ((products) =>{
            session.getUrl= getUrl(req);
            res.send(products)
            return res.json({
                meta: {
                    endpoint: getUrl(req),
                    status: 200,
                    total: products.length
                },
                data: products
            })
            
        }).catch(errors => console.log(errors))
    },
    
    
}


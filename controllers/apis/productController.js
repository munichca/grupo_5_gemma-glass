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
            /* res.send(products); */
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
    detail:(req, res)=>{
        /* res.send(req.params.name) */
        db.Product.findOne({
            where :{name: req.params.name},
            include: [{ association: "category"},
            { association: "shape"},
            { association: "brand"},
            { association: "material"},
            { association: "image"}]
            
        }).then(products =>{

            return res.status(200).json({
                meta:{
                    endpoint:getUrl(req),
                    status: 200
                },
                data:products
            })
        }).catch(error => console.log(error))

    },
    
}


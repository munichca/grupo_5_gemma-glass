const db = require("../database/models")
const { Op } = require("sequelize")
module.exports = {
    home: (req, res) => {

        /* if (res.locals.user != undefined && res.locals.user.rol == 2) {
            db.Product.findOne({
                    where: {
                        id: res.locals.user.lastProdId
                    }
                })
                .then(product => {
                    console.log(product)
                    db.Product.findAll({
                            where: {
                                shapeId: {
                                    [Op.eq]: product.shapeId
                                }
                            },
                            include: [{ association: "category" },
                                { association: "shape" },
                                { association: "brand" },
                                { association: "material" },
                                { association: "image" }
                            ]
                        })
                        .then(productos => {
                            res.render("home", {
                                arrayProduct: productos,
                                session: req.session
                            })
                        })
                        .catch(err => console.log(err))
                }) */
        /*   } else { */
        db.Product.findAll({
                where: {
                    discount: {
                        [Op.gte]: 5
                    }
                },
                include: [{ association: "category" },
                    { association: "shape" },
                    { association: "brand" },
                    { association: "material" },
                    { association: "image" }
                ]
            })
            .then(productos => {

                res.render("home", {
                    arrayProduct: productos,
                    session: req.session
                })
            })
            .catch(err => console.log(err))
            /*  } */
    },
    turnos: (req, res) => {
        res.render("turnos", {
            session: req.session
        })
    },
    administrator: (req, res) => {
        db.Product.findAll({
                include: [{ association: "category" },
                    { association: "shape" },
                    { association: "brand" },
                    { association: "material" },
                    { association: "image" }
                ]
            })
            .then(products => {
                res.render("administrator", {
                    products,
                    session: req.session
                })
            })
    },
    formarmat: (req, res) => {
        res.render("formarmat", {
            session: req.session
        })
    },
    trolley: (req, res) => {
        res.render("carrito", {
            session: req.session
        })
    },
    search: (req, res) => {
        db.Product.findAll({
                include: [{ association: "image" }],
                where: {
                    name: {
                        [Op.like]: `%${req.query.keywords}%`
                    }
                }
            })
            .then(prod => {
                res.render("results", {
                    arrayProduct: prod,
                    search: req.query.keywords,
                    session: req.session
                })
            })
    },
}
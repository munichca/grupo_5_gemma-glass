module.exports = {
    home: (req, res)=>{
         res.render("home")
    },
    turnos: (req, res)=>{
        res.render("turnos")
    },
    trolley: (req, res)=>{
        res.render("carrito")
    }

}
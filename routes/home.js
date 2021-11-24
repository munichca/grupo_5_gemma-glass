let express = require ("express");
let router = express.Router();
let controller = require ("../controllers/homeController.js");
let cookie = require('../middlewares/cookie')
let userAdmin = require("../middlewares/userAdmin.js");
/* GET Ruta para HOME , TURNOS , CARRITO */
router.get("/",cookie, controller.home);
router.get("/turnos", controller.turnos);
router.get("/trolley", controller.trolley);
router.get('/search', controller.search);
router.get('/administrator',userAdmin, controller.administrator);
router.get('/formarmat',userAdmin, controller.formarmat);

/* router.get("/product/:id", controller.product); */

module.exports = router;
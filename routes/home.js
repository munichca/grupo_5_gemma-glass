let express = require ("express");
let router = express.Router();
let controller = require ("../controllers/homeController.js");
/* GET Ruta para HOME , TURNOS , CARRITO */
router.get("/", controller.home);
router.get("/turnos", controller.turnos);
router.get("/trolley", controller.trolley);
router.get('/search', controller.search);
/* router.get("/product/:id", controller.product); */

module.exports = router;
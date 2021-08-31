let express = require ("express");
let router = express.Router();
let controller = require ("../controllers/adminController.js");
/* GET Ruta para detalleProducto */
router.get("/add", controller.add);

router.get("/listado", controller.lista);
/*RUTA DE EDICION*/
router.get("/edit/:id", controller.edit);
router.put("/edit/:id", controller.edicion);




module.exports = router;
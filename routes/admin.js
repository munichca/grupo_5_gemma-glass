let express = require ("express");
let router = express.Router();
let controller = require ("../controllers/adminController.js");
/* GET Ruta para detalleProducto */
router.get("/add", controller.add);
router.get("/edit", controller.edit);


module.exports = router;
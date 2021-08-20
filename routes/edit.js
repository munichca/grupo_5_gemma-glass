let express = require ("express");
let router = express.Router();
let controller = require ("../controllers/editController.js");
/* GET Ruta para detalleProducto */
router.get("/", controller.edit);



module.exports = router;
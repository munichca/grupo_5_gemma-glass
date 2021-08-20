let express = require ("express");
let router = express.Router();
let controller = require ("../controllers/addController.js");
/* GET Ruta para detalleProducto */
router.get("/", controller.add);



module.exports = router;
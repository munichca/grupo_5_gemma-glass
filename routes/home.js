let express = require ("express");
let router = express.Router();
let controller = require ("../controllers/homeController.js");
/* GET RUta para detalleProducto */
router.get("/", controller.home);



module.exports = router;
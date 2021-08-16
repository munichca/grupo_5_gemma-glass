let express = require ("express");
let router = express.Router();
let controller = require ("../controllers/detailController.js");
/* GET RUta para detalleProducto */
router.get("/", controller.detail);






module.exports = router;
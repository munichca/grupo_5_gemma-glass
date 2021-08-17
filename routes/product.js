let express = require ("express");
let router = express.Router();
let controller = require ("../controllers/productController");
/* GET RUta para detalleProducto */
router.get("/", controller.product);






module.exports = router;
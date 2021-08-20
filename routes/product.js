let express = require ("express");
let router = express.Router();
let controller = require ("../controllers/productController");
/* GET RUta para detalleProducto */
router.get("/product", controller.product);
router.get("/detail", controller.detail);





module.exports = router;
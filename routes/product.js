let express = require ("express");
let router = express.Router();
let controller = require ("../controllers/productController");
/* GET RUta para detalleProducto */
router.get("/product", controller.product);
router.get("/product/:category", controller.productCat);
router.get("/detail/:id", controller.detail);





module.exports = router;
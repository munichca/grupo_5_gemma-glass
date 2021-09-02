let express = require ("express");
let router = express.Router();
let controller = require ("../controllers/productController");
/* GET RUta para detalleProducto */

router.get("/productCat/:id", controller.productCat);
router.get("/productOfertas", controller.productOferta);
router.get("/productForma/:id", controller.productForma);
router.get("/detail/:id", controller.detail);





module.exports = router;
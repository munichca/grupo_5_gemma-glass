let express = require ("express");
let router = express.Router();

let controller = require ("../../controllers/apis/productController");

router.get("/products", controller.list);
router.get("/products/:name", controller.detail);



module.exports = router;
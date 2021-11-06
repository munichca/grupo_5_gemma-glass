let express = require ("express");
let router = express.Router();

let controller = require ("../../controllers/apis/productController");

router.get("/products", controller.list);



module.exports = router;
let express = require ("express");
let router = express.Router();
let controller = require ("../controllers/trolleyController");
/* GET RUta para carrito */
router.get("/", controller.trolley);






module.exports = router;
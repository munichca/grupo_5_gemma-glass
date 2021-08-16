let express = require ("express");
let router = express.Router();
let controller = require ("../controllers/registrateController.js");
/* GET RUta para detalleProducto */
router.get("/", controller.registrate);






module.exports = router;
let express = require ("express");
let router = express.Router();
let controller = require ("../controllers/turnosController");
/* GET RUta para detalleProducto */
router.get("/", controller.turnos);






module.exports = router;
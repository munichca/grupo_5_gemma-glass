let express = require ("express");
let router = express.Router();
let {add, edit, lista, update, borrarProducto} = require ("../controllers/adminController.js");
/* GET Ruta para detalleProducto */
router.get("/add", add);
router.get("/edit/:id", edit);
router.get("/listado", lista);
router.put("/edit/:id", update);
router.delete("/eliminarProducto/:id", borrarProducto)
module.exports = router;
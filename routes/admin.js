let express = require ("express");
let router = express.Router();
let {add, edit, lista, edicion, borrarProducto} = require ("../controllers/adminController.js");

router.get("/add", add);
router.get("/edit/:id", edit);
router.get("/listado", lista);
router.put("/edit/:id", edicion);
router.delete("/eliminarProducto/:id", borrarProducto)
module.exports = router;
let express = require ("express");
let router = express.Router();
let {add, edit, lista, edicion, borrarProducto, nuevoProducto} = require ("../controllers/adminController.js");

router.get("/edit/:id", edit);
router.get("/listado", lista);
router.put("/edit/:id", edicion);
router.delete("/eliminarProducto/:id", borrarProducto)
router.get('/add', add);
router.post('/add', nuevoProducto);

module.exports = router;
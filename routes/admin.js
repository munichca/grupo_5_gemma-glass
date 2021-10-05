let express = require ("express");
let router = express.Router();
let {add, edit, lista, edicion, borrarProducto, nuevoProducto } = require ("../controllers/adminController.js");
let uploadProductImages = require ("../middlewares/uploadProductImages");
let cookie = require('../middlewares/cookie')
let userSession = require('../middlewares/userSession');
const userAdmin = require("../middlewares/userAdmin.js");


/* router.get("/edit/:id",userAdmin, edit);
router.get("/listado",cookie,userAdmin ,lista);
router.put("/edit/:id", uploadProductImages.array("archivos"), edicion);
router.delete("/eliminarProducto/:id", borrarProducto)
router.get('/add', cookie,add);
router.post('/add', uploadProductImages.array("archivos"), nuevoProducto); */
router.get("/edit/:id",userAdmin, edit);
router.get("/listado",cookie,userAdmin ,lista);
router.put("/edit/:id", uploadProductImages.array("archivos"), edicion);
router.delete("/eliminarProducto/:id", borrarProducto)
router.get('/add', cookie,add);
router.post('/add', uploadProductImages.array("archivos"), nuevoProducto);





module.exports = router;
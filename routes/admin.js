let express = require ("express");
let router = express.Router();
let {add, edit, lista, edicion, borrarProducto, nuevoProducto } = require ("../controllers/adminController.js");
let uploadProductImages = require ("../middlewares/uploadProductImages");
let cookie = require('../middlewares/cookie')
let userSession = require('../middlewares/userSession');
let userAdmin = require("../middlewares/userAdmin.js");
let productCreateValidator = require("../validations/productCreateValidator");


router.get("/edit/:id",userAdmin, edit);
router.get("/listado",cookie,userAdmin ,lista);
router.put("/edit/:id", uploadProductImages.array("archivos"), productCreateValidator, edicion);
router.delete("/eliminarProducto/:id", borrarProducto)
router.get('/add', cookie,add);
router.post('/add', uploadProductImages.array("archivos"), productCreateValidator, nuevoProducto);





module.exports = router;
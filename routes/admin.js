let express = require ("express");
let router = express.Router();
let {add, edit, lista, edicion, borrarProducto, nuevoProducto,  adminRol } = require ("../controllers/adminController.js");
let uploadProductImages = require ("../middlewares/uploadProductImages");
let cookie = require('../middlewares/cookie')
let userSession = require('../middlewares/userSession');
let userAdmin = require("../middlewares/userAdmin.js");
let productCreateValidator = require("../validations/productCreateValidator");
let producteditValidator = require("../validations/producteditValidator");


/* router.get("/formarmat",userAdmin, formarmat); */
router.get("/edit/:id",userAdmin, edit);
router.get("/administrator",cookie,userAdmin ,lista);
router.get("/adminRol",cookie,userAdmin ,adminRol);
router.put("/edit/:id", uploadProductImages.array("archivos"), producteditValidator, edicion);
router.delete("/eliminarProducto/:id", borrarProducto)
router.get('/add', cookie,add);
router.post('/add', uploadProductImages.array("archivos"), productCreateValidator, nuevoProducto);





module.exports = router;
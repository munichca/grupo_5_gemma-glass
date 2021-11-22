let express = require ("express");
let router = express.Router();
let controller = require ("../../controllers/apis/subCatController");
let shapeValidator = require("../../validations/shapeValidator");
let brandValidator = require("../../validations/brandValidator");
let materialValidator = require("../../validations/materialValidator");
router.get("/shape", controller.shape);
router.get("/shape/:name", controller.shapeName);
router.post("/shape/", shapeValidator, controller.createShape);
router.put("/sedit/:id", shapeValidator, controller.editShape);
router.delete("/sdelete/:id",  controller.deleteShape);
router.get("/brand", controller.brand);
router.get("/brand/:name", controller.brandName);
router.post("/brand/", brandValidator, controller.createBrand);
router.put("/bedit/:id", brandValidator, controller.editBrand);
router.delete("/bdelete/:id", controller.deleteBrand);
router.get("/material", controller.material);
router.get("/material/name", controller.materialName);
router.post("/material/", materialValidator, controller.createMaterial);
router.put("/medit/:id",materialValidator, controller.editMaterial);
router.delete("/mdelete/:id", controller.deleteMaterial);


module.exports = router;
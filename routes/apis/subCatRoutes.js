let express = require ("express");
let router = express.Router();
let controller = require ("../../controllers/apis/subCatController");

router.get("/shape", controller.shape);
router.post("/shape/", controller.createShape);
router.put("/sedit/:id", controller.editShape);
router.delete("/shape/delete/:id", controller.deleteShape);
router.get("/brand", controller.brand);
router.post("/brand/", controller.createBrand);
router.put("/brand/edit/:id", controller.editBrand);
router.delete("/brand/delete/:id", controller.deleteBrand);
router.get("/material", controller.material);
router.post("/material/", controller.createMaterial);
router.put("/material/edit/:id", controller.editMaterial);
router.delete("/material/delete/:id", controller.deleteMaterial);


module.exports = router;
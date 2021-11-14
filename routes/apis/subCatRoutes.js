let express = require ("express");
let router = express.Router();
let controller = require ("../../controllers/apis/subCatController");

router.get("/shape", controller.shape);
router.post("/shape/", controller.createShape);
router.put("/shape/edit/:id", controller.editShape);
router.delete("/shape/delete/:id", controller.deleteShape);
router.get("/brand", controller.brand);
router.get("/material", controller.material);


module.exports = router;
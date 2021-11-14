let express = require ("express");
let router = express.Router();

let controller = require ("../../controllers/apis/userController")
router.get("/sU/:id", controller.superUser)


module.exports = router;
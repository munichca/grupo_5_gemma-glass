let express = require ("express");
let router = express.Router();

let controller = require ("../../controllers/apis/userController")
router.get("/sU/:id", controller.superUser)
router.get("/users/", controller.users)
router.get("/user/:id", controller.user)
/* router.post("/create/", controller.createUser) */
router.put("/edit/:id", controller.editUser)



module.exports = router;
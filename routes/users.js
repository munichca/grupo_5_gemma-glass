let express = require ("express");
let router = express.Router();
let controller = require ("../controllers/usersController");
/* GET RUta para login */
router.get("/login", controller.login);
router.get("/registro", controller.register);
router.get("/user", controller.user);





module.exports = router;
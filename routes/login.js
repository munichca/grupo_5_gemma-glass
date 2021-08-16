let express = require ("express");
let router = express.Router();
let controller = require ("../controllers/loginController");
/* GET RUta para login */
router.get("/", controller.login);






module.exports = router;
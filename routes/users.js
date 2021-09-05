let express = require ("express");
let router = express.Router();
let controller = require ("../controllers/usersController");
let uploadUserAvatar = require('../middlewares/uploadUserAvatar')
/* GET RUta para login */
router.get("/login", controller.login);
router.get("/registro", controller.register);
/* router.post('/registro', uploadUserAvatar.single('avatar'), registerValidator, processRegister); */
router.get("/user", controller.user);
router.get("/userEdit", controller.editProfileUser);




module.exports = router;
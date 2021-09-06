let express = require ("express");
let router = express.Router();
<<<<<<< HEAD
let controller = require ("../controllers/usersController");
let uploadUserAvatar = require('../middlewares/uploadUserAvatar')
/* GET RUta para login */
router.get("/login", controller.login);
router.get("/registro", controller.register);
/* router.post('/registro', uploadUserAvatar.single('avatar'), registerValidator, processRegister); */
router.get("/user", controller.user);
router.get("/userEdit", controller.editProfileUser);
=======
let {login,  user, agregarUser, crearUser, editProfileUser} = require ("../controllers/usersController");
let uploadUserAvatar = require('../middlewares/uploadUserAvatar')
/* GET RUta para login */
router.get("/login", login);
/* router.get("/registro", register); */
router.get("/user", user);
router.get("/agregarUser", agregarUser);
router.post("/agregarUser", uploadUserAvatar.single("avatar"), crearUser);
router.get("/userEdit", editProfileUser);
>>>>>>> antonio




module.exports = router;
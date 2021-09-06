let express = require ("express");
let router = express.Router();
let {login,  user, agregarUser, crearUser, editProfileUser} = require ("../controllers/usersController");
let uploadUserAvatar = require('../middlewares/uploadUserAvatar')
/* GET RUta para login */
router.get("/login", login);
/* router.get("/registro", register); */
router.get("/user", user);
router.get("/agregarUser", agregarUser);
router.post("/agregarUser", uploadUserAvatar.single("avatar"), crearUser);
router.get("/userEdit", editProfileUser);




module.exports = router;
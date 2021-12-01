let express = require ("express");
let router = express.Router();
let {login,
     user,
     addUser,
     createUser,
     profileUser,
     processLogin,
     updateProfile,
     updateColor,
logout } = require ("../controllers/usersController");
let uploadUserAvatar = require('../middlewares/uploadUserAvatar');
let userCreateValidator = require("../validations/userCreateValidator");
let loginValidator = require('../validations/userLoginValidator')
let userSession = require('../middlewares/userSession')

const cookie = require("../middlewares/cookie");
/* GET RUta para login */
router.get("/login", login);
router.post("/login",loginValidator, processLogin);
router.get("/logout", logout);
/* register */
router.get("/addUser", addUser);
router.post("/addUser", uploadUserAvatar.single("avatar"), userCreateValidator, createUser);

/*  */
router.get("/user",userSession,cookie, user);

router.get("/editUser/:id",userSession,cookie, profileUser);
router.put("/editUser/:id", uploadUserAvatar.single('avatar'),cookie,updateProfile)
/* router.patch("/editUser/:id", updateColor) */






module.exports = router;
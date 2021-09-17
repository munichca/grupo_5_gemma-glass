let express = require ("express");
let router = express.Router();
let {login,
     user,
     addUser,
     createUser,
     profileUser,
     processLogin,
     updateProfile,
logout } = require ("../controllers/usersController");
let uploadUserAvatar = require('../middlewares/uploadUserAvatar');
let userCreateValidator = require("../validations/userCreateValidator");
let loginValidator = require('../validations/userLoginValidator')
const cookie = require("../middlewares/cookie");
/* GET RUta para login */
router.get("/login", login);
router.post("/login",loginValidator, processLogin);
router.get("/logout", logout);
/* register */
router.get("/addUser", addUser);
router.post("/addUser", uploadUserAvatar.single("avatar"), userCreateValidator, createUser);

/*  */
router.get("/user",cookie, user);

router.get("/editUser/:id",cookie, profileUser);
router.put("/editUser/:id", uploadUserAvatar.single('avatar'),cookie,updateProfile)




module.exports = router;
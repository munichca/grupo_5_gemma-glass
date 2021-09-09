let express = require ("express");
let router = express.Router();
let {login,
     user,
     addUser,
     createUser,
     editProfileUser,
     processLogin} = require ("../controllers/usersController");
let uploadUserAvatar = require('../middlewares/uploadUserAvatar');
let userCreateValidator = require("../validations/userCreateValidator");
/* GET RUta para login */
router.get("/login", login);
router.post("/login", processLogin);
router.get("/user", user);
router.get("/addUser", addUser);
router.post("/addUser", uploadUserAvatar.single("avatar"), userCreateValidator, createUser);
router.get("/userEdit", editProfileUser);




module.exports = router;
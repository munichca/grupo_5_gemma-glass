const express = require('express');
const app = express();
const port = 3005;
const path = require('path');
let cookiepParser = require('cookie-parser')
let methodOverride = require('method-override');
let session = require('express-session');
let localsCheck = require("./middlewares/localsCheck")
let headerCateg = require("./middlewares/headerCateg")
/*  ENRUTADORES */
const homeRouter = require("./routes/home");
const usersRouter = require ("./routes/users");
const productRouter = require ("./routes/product")
const adminRouter = require ("./routes/admin")
const apiProductsRoutes = require ("./routes/apis/productRoutes");
const apiUserRoutes = require ("./routes/apis/userRoutes");
const apiSubCatRoutes = require ("./routes/apis/subCatRoutes");

/* ################################ */
/* Middleware */
app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(methodOverride('_method'))
app.use(cookiepParser())
app.use(session({
    secret: "gemmaGlass",
    resave: false,
    saveUninitialized : true,
}))
app.use(localsCheck)
app.use(headerCateg)

/* VIEWS */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/*  RUTAS,  */
app.use("/",homeRouter);
app.use("/users", usersRouter);
app.use("/product", productRouter);
app.use("/admin", adminRouter);
app.use('/apis', apiProductsRoutes);
app.use('/apis/user', apiUserRoutes);
app.use('/apis', apiSubCatRoutes);

/* ##################################### */
app.listen(port, ()=>{
    console.log(`Puerto corriendo en ${port}\n http://localhost:${port}`)});


const express = require('express');
const app = express();
const port = 3001;
const path = require('path');
let cookiepParser = require('cookie-parser')
let methodOverride = require('method-override');
let session = require('express-session');

/*  ENRUTADORES */
const homeRouter = require("./routes/home");
const usersRouter = require ("./routes/users");
const productRouter = require ("./routes/product")
const adminRouter = require ("./routes/admin")


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


/* VIEWS */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/*  RUTAS,  */
app.use("/",homeRouter);
app.use("/users", usersRouter);
app.use("/product", productRouter);
app.use("/admin", adminRouter);
/* ##################################### */
app.listen(port, ()=>{
    console.log(`Puerto corriendo en ${port}\n http://localhost:${port}`)});


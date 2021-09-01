const express = require('express');
const app = express();
const port = 3001;
const path = require('path');
let methodOverride = require("method-override");

/*  ENRUTADORES */
const homeRouter = require("./routes/home");
const usersRouter = require ("./routes/users");
const productRouter = require ("./routes/product")
const adminRouter = require ("./routes/admin")


/* Middleware */
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended : false}));
app.use(express.json());

/* VIEWS */
app.set("view engine", "ejs"); 

/*  RUTAS,  */
app.use("/",homeRouter);
app.use("/users", usersRouter);
app.use("/product", productRouter);
app.use("/admin", adminRouter);
/* ##################################### */
app.listen(port, ()=>{
    console.log(`Puerto corriendo en ${port}\n http://localhost:${port}`)});


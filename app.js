const express = require('express');
const app = express();
const port = 3001;
const path = require('path');

/*  ENRUTADORES */
const homeRouter = require("./routes/home");
const usersRouter = require ("./routes/users");
const productRouter = require ("./routes/product")
const adminRouter = require ("./routes/admin")


/* ################################ */

/* VIEWS */
app.set("view engine", "ejs"); 

/*  RUTAS,  */
app.use("/",homeRouter);
app.use("/users", usersRouter);
app.use("/product", productRouter);
app.use("/admin", adminRouter);



/* ##################################### */

app.use(express.static('public'));

app.listen(port, ()=>{
    console.log(`Puerto corriendo en ${port}\n http://localhost:${port}`)});


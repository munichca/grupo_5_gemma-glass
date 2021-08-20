const express = require('express');
const app = express();
const port = 3001;
const path = require('path');

/*  ENRUTADORES */
const homeRouter = require("./routes/home");
const detailRouter = require ("./routes/detail");
const registrateRouter = require ("./routes/registrate");
const trolleyRouter = require ("./routes/trolley");
const loginRouter = require ("./routes/login");
const turnosRouter = require ("./routes/turnos")
const productRouter = require ("./routes/product")
const editRouter = require ("./routes/edit")
const addRouter = require ("./routes/add")

/* ################################ */

/* VIEWS */
app.set("view engine", "ejs"); 

/*  RUTAS,  */
app.use("/",homeRouter);
app.use("/detail", detailRouter);
app.use("/registro", registrateRouter);
app.use("/carrito", trolleyRouter);
app.use("/login", loginRouter);
app.use("/turnos", turnosRouter);
app.use("/product", productRouter);
app.use("/edit", editRouter);
app.use("/add", addRouter);


/* ##################################### */

app.use(express.static('public'));

app.listen(port, ()=>{
    console.log(`Puerto corriendo en ${port}\n http://localhost:${port}`)});


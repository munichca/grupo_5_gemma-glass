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
/* const headerRouter = require ("./routes/header"); */
/* ################################ */

/* VIEWS */
app.set("view engine", "ejs"); 

/*  RUTAS,  */
app.use("/",homeRouter);
app.use("/detail", detailRouter);
app.use("/registro", registrateRouter);
app.use("/carrito", trolleyRouter);
app.use("/login", loginRouter);
app.use("/turnos", turnosRouter)
/* app.use("/header", headerRouter); */

/* ##################################### */

app.use(express.static('public'));


/* app.get('/turnos',(req, res)=>{
    res.sendFile(path.join(__dirname, '/views/turnos.html'))
}); */
app.listen(port, ()=>{
    console.log(`Puerto corriendo en ${port}\n http://localhost:${port}`)});


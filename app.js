const express = require('express');
const app = express();
const port = 3001;
const path = require('path');


app.use(express.static('public'));


/* app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname, '/views/detalle.html'))
});
 */
app.get('/detalle',(req, res)=>{
    res.sendFile(path.join(__dirname, '/views/detalle.html'))
});

app.get('/login',(req, res)=>{
    res.sendFile(path.join(__dirname, '/views/login.html'))
});

app.get('/turnos',(req, res)=>{
    res.sendFile(path.join(__dirname, '/views/turnos.html'))
});

app.listen(port, ()=>{
    console.log(`Puerto corriendo en ${port}\n http://localhost:${port}`)});


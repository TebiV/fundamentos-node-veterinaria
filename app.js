const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
//Motor de plantilla
app.set('view engine','ejs');
//Plantillas
app.set('views', __dirname + '/views');



app.use(express.static(__dirname + "/public"))
//Buscar las rutas
app.use('/', require('./router/rutasweb'));
app.use('/mascotas', require('./router/mascotas'));

app.use((req,res,next) => {
    res.status(404).render("404", {
        titulo404: "ERROR 404",
        texto404: "ESTA PAGINA NO EXISTE PROBA EN OTRA"
    })
})

app.listen(PORT, () => {
    console.log('escuchando solicitudes en el puerto ', PORT)
})





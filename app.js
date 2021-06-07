const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
//Motor de plantilla
app.set('view engine','ejs');
//Plantillas
app.set('views', __dirname + '/views');



app.use(express.static(__dirname + "/public"))

app.get('/servicios', (req,res)=>{
    res.render("servicios", {tituloServicios: "Mi subtitulo de servicios"})
})

app.get('', (req,res)=>{
    res.render("index", {titulo: "MI TITULO MEJOREADO A DINAMICO"})
})



app.use((req,res,next) => {
    res.status(404).render("404", {
        titulo404: "ERROR 404",
        texto404: "ESTA PAGINA NO EXISTE PROBA EN OTRA"
    })
})

app.listen(PORT, () => {
    console.log('escuchando solicitudes en el puerto ', PORT)
})





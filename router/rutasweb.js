const express = require('express');
const router = express.Router();

router.get('/servicios', (req,res)=>{
    res.render("servicios", {tituloServicios: "Mi subtitulo de servicios"})
})

router.get('/', (req,res)=>{
    res.render("index", {titulo: "MI TITULO MEJOREADO A DINAMICO"})
})

module.exports = router;
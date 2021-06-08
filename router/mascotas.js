const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.render("mascotas", {
        arrayMascotas: [
            { id: '123',nombre:'manolo', descripcion: 'perro grande'},
            { id: '133',nombre:'patricio', descripcion: 'perro grande'},
            { id: '143',nombre:'cliford', descripcion: 'perro grande'},
        ]
    })
})
module.exports = router;
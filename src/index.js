import express from 'express'

// const express = require('express')

const app = express()

app.set('port', 3000)

app.listen(app.get('port'),()=>{
    console.log('Servidor levantado en el puerto ', app.get('port'))
})

app.get('/', (req, res)=>{
    res.json({message: "Bienvenido a mi backEnd! Comunicate mediante peticiones a mi API-REST"})
})

app.post('/', (req,res)=>{
    res.json({message: "Estas realizando una peticion tipo POST! No recibo REQUEST"})
})
import express from 'express'

const app = express()

app.set('port', 3000)

app.get('/', (req, res)=>{
    res.json({message: "Bienvenido a mi backEnd! Comunicate mediante peticiones a mi API-REST"})
})

app.post('/', (req,res)=>{
    res.json({message: "Estas realizando una peticion tipo POST! No recibo REQUEST"})
});

export default app
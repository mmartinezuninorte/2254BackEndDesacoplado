import express from 'express'
import Task from './models/Task'

const app = express()

app.set('port', 3000)

app.use(express.json())

app.get('/', (req, res)=>{
    res.json({message: "Bienvenido a mi backEnd! Comunicate mediante peticiones a mi API-REST"})
})

app.post('/', (req,res)=>{
    res.json({message: "Estas realizando una peticion tipo POST! No recibo REQUEST"})
});

app.post('/api', async (req, res)=>{
    const newTask = new Task({
        title: req.body.title,
        description: req.body.description
    })
    await newTask.save()
    console.log(newTask)
    res.json({message: 'Tarea guardada!'})
})

export default app
import express from 'express'
import taskRoutes from './routes/task.router'

const app = express()

app.set('port', 3000)

app.use(express.json())

app.get('/', (req, res)=>{
    res.json({message: "Bienvenido a mi backEnd! Comunicate mediante peticiones a mi API-REST"})
})

app.post('/', (req,res)=>{
    res.json({message: "Estas realizando una peticion tipo POST! No recibo REQUEST"})
});

app.use('/api/tasks', taskRoutes)

export default app
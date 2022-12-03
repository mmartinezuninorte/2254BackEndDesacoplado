import express from 'express'
import taskRoutes from './routes/task.router'
import authRoutes from './routes/auth.router'
import expressStatusMonitor from 'express-status-monitor'

const app = express()

app.set('port', 3003)

app.use(express.json())
app.use(expressStatusMonitor())

app.get('/', (req, res)=>{
    res.json({message: "Bienvenido a mi backEnd! Comunicate mediante peticiones a mi API-REST"})
})

app.post('/', (req,res)=>{
    res.json({message: "Estas realizando una peticion tipo POST! No recibo REQUEST"})
});

app.use('/api/tasks', taskRoutes)

app.use('/api/auth', authRoutes)

export default app
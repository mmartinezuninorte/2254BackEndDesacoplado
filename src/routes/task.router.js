import { Router } from 'express';
import Task from '../models/Task'

const router = Router()

router.post('/', async (req, res)=>{
    const newTask = new Task({
        title: req.body.title,
        description: req.body.description
    })
    await newTask.save()
    console.log(newTask)
    res.json({message: 'Tarea guardada!'})
})

router.get('/',async (req, res)=>{
    const tareas = await Task.find()
    res.json(tareas)
})

export default router
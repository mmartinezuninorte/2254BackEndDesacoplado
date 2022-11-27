import Task from '../models/Task'

export const newTask = async (req, res)=>{
    if(!req.body.title){
        return res.status(400).send({message: "El campo titulo no puede ir vacio"})
    }
    try {
        const newTask = new Task({
            title: req.body.title,
            description: req.body.description
        })
        await newTask.save()
        console.log(newTask)
        res.json({message: 'Tarea guardada!'})
    } catch (error) {
        res.status(500).json({message: "Algon fallo al intentar guardar tu nueva tarea"})
    }
}

//Manejo de error con estado 500 en caso de crash
export const findAllTask = async (req, res)=>{
    const tareas = await Task.find()
    res.json(tareas)
}

export const findOneTask = async (req, res)=>{
    const tarea = await Task.findById(req.params.id)
    res.json(tarea)
}

export const deleteTask = async (req, res)=>{
    const id = req.params.id
    await Task.findByIdAndDelete(id)
    res.json({message: `La tarea con id: ${id}, ha sido eliminada satisfactoriamente`})
}

export const updateTask = async (req, res)=>{
    const { id } = req.params
    await Task.findByIdAndUpdate(id, req.body)
    res.json({message: `La tarea con id ${id}, ha sido actualizada!`})
}
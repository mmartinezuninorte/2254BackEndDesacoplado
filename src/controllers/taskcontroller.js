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
    try {
        const tareas = await Task.find()
        res.json(tareas)  
    } catch (error) {
        res.status(500).json({
            message:  "Opps, algo fallo al consultar el listado de tareas"
        })
    }
}

export const findOneTask = async (req, res)=>{
    const id = req.params.id
    try {
        const tarea = await Task.findById(id)
        if(!tarea) return res.status(404).json({message: `la tarea con id: ${id} no existe`})
        res.json(tarea)
    } catch (error) {
        res.status(500).json({
            message: error.message || `Error al buscar la tarea con id: ${id}`
        })}
}

// Validacion para la no existencia de una tarea al momento de eliminarla
export const deleteTask = async (req, res)=>{
    const id = req.params.id
    try {
        await Task.findByIdAndDelete(id)
        res.json({message: `La tarea con id: ${id}, ha sido eliminada satisfactoriamente`})
    } catch (error) {
        res.status(500).json({
            message: error.message || `Opps, ocurrio un error al intentar eliminar la tarea con id: ${id}`
        })
    }
}

export const updateTask = async (req, res)=>{
    const { id } = req.params
    
    if (!req.body.title){
      return res.status(400).send({message: "El campo titulo ESTA VACIO!!"})  
    }

    try {
        await Task.findByIdAndUpdate(id, req.body)
        res.json({message: `La tarea con id ${id}, ha sido actualizada!`})
    } catch (error) {
        res.status(500).json({
            message: error.message || `Error al actualizar la tarea con id ${id}`
        })
    }
}
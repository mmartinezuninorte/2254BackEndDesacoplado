import User from '../models/User'
import jwt from 'jsonwebtoken'
import CONFIG from '../config.json'

export const singUp = async (req, res)=>{
    try {
        const {username, email, password, roles} = req.body
        const newUser = new User({
            username, //Exactamente igual que username: username
            email,
            password: await User.encryptPassword(password)
        })
        const savedUser = await newUser.save()

        const token = jwt.sign({id: savedUser._id}, CONFIG.SECRET,{
            expiresIn: 86400
        })

        console.log(savedUser)
        res.json({message: "Usuario registrado con exito", token})
    } catch (error) {
        res.status(500).json({message: "Ocurrio un error inesperado registrando al usuario"})
    }
}

export const singIn = async (req, res)=>{
    try {
        if(!req.body.password) return res.status(400).json({
                message: "Campo password obligatorio"})
        
        const userFound = await User.findOne({
                email: req.body.email})
        
        if (!userFound) return res.status(404).json({
                message: "Usuario no existe, registrelo"})
        
        const matchPassword = await User.comparePassword(req.body.password, userFound.password)
        
        if(!matchPassword) return res.status(401).json({
                message: "Contraseña invalida - Sin autorizacion"})
        
        const token = jwt.sign({id: userFound._id}, CONFIG.SECRET,{
            expiresIn: 86400
        })
        res.status(200).json({
            message: "inicio de sesion exitoso",
            token})
    } catch (error) {
        res.status(500).json({message: "ocurrio un error inesperado al intentar iniciar sesion"})
    }
}
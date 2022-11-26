import { Schema, model } from 'mongoose';

const taskShema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    } ,
    description: String,
    done: {
        type: Boolean,
        default: false
    } 
},{
    timestamps: true,
    versionKey: false
})

export default model('Task', taskShema)
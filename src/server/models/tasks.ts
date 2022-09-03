import {model, Schema, Document} from "mongoose"; 


export interface ITask extends Document {
    title: string,
    description: string 
    isCompleted: boolean
}

const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        default: false,
    }
}) ;

const TaskModel = model<ITask>("tasks",taskSchema); 

export default TaskModel;
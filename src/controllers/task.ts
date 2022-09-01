import { TaskModel } from "../models/tasks"; 

async function getAll(): Promise<Object> {
    const tasks = await TaskModel.find();
    return tasks;
}
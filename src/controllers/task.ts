import TaskModel from "../models/tasks";

export async function getAll(): Promise<Object> {
    const tasks = await TaskModel.find(); 
    return tasks;
}
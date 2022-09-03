import taskModel from "../models/tasks";

export async function getTasks():Promise<Object | undefined> {
    try{
        const tasks = await taskModel.find();
        return tasks;
    }catch(err){
        console.log(err);
    }
}

export async function getTaskById(id:string):Promise<Object | null | undefined> {
    try{
        const task = await taskModel.findById(id);
        return task 
    }catch(err){
        console.log(err);
    }
}

export async function createTask(task:Object):Promise<Object | undefined> {    
    try{
        const newTask = await taskModel.create(task);
        console.log(newTask);
        
        return newTask; 
    }catch(err){
        console.log(err);
    }
}

export async function editTaskById(id:string, task:Object):Promise<Object | null |undefined>{
   try {
        const taskEdited = await taskModel.findByIdAndUpdate(id, task);
        return taskEdited; 

    }catch(err) {
        console.log(err)   
    }
}

export async function deleteTaskById(id:string):Promise<Object | null | undefined> {
    try{
        const taskDeleted = await taskModel.findByIdAndDelete(id);
        return taskDeleted;
    }catch(err){
        console.log(err);
    }
}
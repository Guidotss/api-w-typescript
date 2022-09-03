import { prop, getModelForClass } from "@typegoose/typegoose";


export class Task{
    @prop({required:true})
    public title:string;
    @prop({required:true})
    public description:string;
}

const TaskModel = getModelForClass(Task);

export default TaskModel;

/* async function getAll(): Promise<Object | undefined> {
    const tasks = await TaskModel.find();
    return tasks;
} */





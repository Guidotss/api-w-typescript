import { prop, getModelForClass } from "@typegoose/typegoose";


export class Task{
    @prop()
    name:string;

    @prop()
    description:string;

    @prop()
    completed:boolean;
}

export const TaskModel = getModelForClass(Task);



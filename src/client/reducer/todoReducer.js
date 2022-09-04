import { createTask,deleteTask,editTask } from "../api/task.api";

export const todoReducer  = async(initialState=[],action={}) => {
    switch(action.type){
        case "[TODO] add todo":
            const task = await createTask(action.payload);
            return [...initialState,action.payload];
        
        
        case "[TODO] delete todo":
            await deleteTask(action.payload);
            return initialState.filter(todo => todo.id !== action.payload);

        case "[TODO] edit todo":
            const id = action.payload.id;
            await editTask(id,action.payload);
            return initialState.map(todo => todo.id === action.payload.id ? action.payload : todo);
    }
}
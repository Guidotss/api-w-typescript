import { useReducer, useEffect } from "react";
import { todoReducer } from '../reducer/todoReducer'

export const useTodo = (initialState=[]) => {
    const [task,dispatch] = useReducer(todoReducer,initialState); 

    const handleAddTodo = (todo) => {
        const action ={
            type: "[TODO] add todo",
            payload: todo
        }
        dispatch(action);
    }

    const handleDeleteTodo = (todo) => {
        const action ={
            type: "[TODO] delete todo",
            payload: todo
        }
        dispatch(action);
    }

    const handleEditTodo = (todo) => {
        const action ={
            type: "[TODO] edit todo",
            payload: todo
        }
        dispatch(action);
    }


    return {
        handleAddTodo,
        handleDeleteTodo,
        handleEditTodo,
    }
}
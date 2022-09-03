import { useReducer, useEffect } from "react";

export const useTodo = (initialState=[]) => {
    const [task,dispatch] = useReducer(todoReducer,initialState); 
}
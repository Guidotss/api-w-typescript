import { useState } from "react";

export const useRenderTodo = (value=false) => {
    const [renderTodo, setRenderTodo] = useState(value);

    const openModalAddTodo = () => {
        setRenderTodo(true);
    }

    const closeModalAddTodo = () => {
        setRenderTodo(false);
    }

    return {
        renderTodo,
        openModalAddTodo,
        closeModalAddTodo,
    }
}
import { useState } from "react";

export const useRenderTodo = (value=false) => {
    const [renderTodo, setRenderTodo] = useState(value);
    const [renderEditTodo, setRenderEditTodo] = useState(value);

    const openModalAddTodo = () => {
        setRenderTodo(true);
    }

    const closeModalAddTodo = () => {
        setRenderTodo(false);
    }

    const openModalEditTodo = () => {
        setRenderEditTodo(true);
    }

    const closeModalEditTodo = () => {
        setRenderEditTodo(false);
    }

    return {
        renderTodo,
        openModalAddTodo,
        closeModalAddTodo,
        renderEditTodo,
        openModalEditTodo,
        closeModalEditTodo,
    }
}
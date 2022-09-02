import { useState } from 'react';

export const useForm = (initialState = {}) => {
    const [task, setTask] = useForm(initialState);

    const onIputChange = ({target}) => {
        const { name , value } = target 

        setInput({
            ...task,
            [name]: value
        }); 
    }

    return {
        input,
        onIputChange
    }
}
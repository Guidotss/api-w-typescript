import { useState, useEffect } from "react";
import { getTasks } from '../api/task.api';

export const useFetch = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    const getTask = async () => {
        const tasks = await getTasks();
        setData(tasks);
        setLoading(false);
    }


    useEffect(() => {
        getTask();
        setLoading(true);
    },[]); 



    return{
        setData,
        data,
        loading,
    }

}
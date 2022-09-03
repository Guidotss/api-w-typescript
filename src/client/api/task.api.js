import axios from 'axios';

export const createTask = async (task) => {
    await axios.post("http://localhost:8080"); 
}

export const getTasks = async () => {
    const tasks = await axios.get("http://localhost:8080");
    return tasks.data;
}
import axios from 'axios';

export const createTask = async (task) => {
    await axios.post("http://localhost:8080/task",task); 
}

export const getTasks = async () => {
    const tasks = await axios.get("http://localhost:8080");
    return tasks.data;
}

export const getTask = async (id) => {
    const task = await axios.get(`http://localhost:8080?id=${id}`);
    return task.data;
}

export const deleteTask = async (id) => {
    await axios.delete(`http://localhost:8080?id=${String(id)}`);
}

export const editTask = async (id,task) => {
    await axios.put(`http://localhost:8080?id=${String(id)}`,task);
}
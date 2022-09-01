import express from 'express';
import TaskRouter from './routes/task.routes';
import './dataBase/connect' 

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', TaskRouter);


const PORT:number = 8080;

const server = app.listen(PORT,() =>{
    console.log(`Server is running on port ${PORT}`);  
})


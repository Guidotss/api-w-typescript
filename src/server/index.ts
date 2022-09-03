import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import TaskRouter from './routes/task.routes';
import './dataBase/connect' 
import './models/tasks'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); 
app.use(morgan('dev'));
app.use('/', TaskRouter);



const PORT:number = 8080;

const server = app.listen(PORT,() =>{
    console.log(`Server is running on port ${PORT}`);  
})


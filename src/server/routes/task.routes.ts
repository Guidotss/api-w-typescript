import { Router } from 'express'
import { getTasks, createTask, getTaskById, editTaskById, deleteTaskById} from "../controllers/task"

const router = Router();


router.get('/', async (req,res) => {
    const { id } = req.query; 
    if(id){
        const task = await getTaskById(String(id));
        res.json(task);
    }else{
        const tasks = await getTasks();
        res.json(tasks);
    }
});



router.post('/tak',(req,res) => {
    const newTask = createTask(req.body)
    res.redirect('/');
});


router.put('/',(req,res) => {
    const { id } = req.query;
    const taskEdited = editTaskById(String(id), Object(req.body));
    if(taskEdited){
        res.json(taskEdited)
    }else{
        res.json({message: '404 not found'})
    }
})



router.delete('/',(req,res) => {
    const { id } = req.query;
    const taskDeleted = deleteTaskById(String(id));
    
    if(taskDeleted){
        res.json(taskDeleted)
    }else{
        res.json({message: '404 not found'})
    }
});

export default router;
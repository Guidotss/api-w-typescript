import { Router } from 'express'


const router = Router();


router.get('/', async (_req,res) => {
    res.send("hola")
});

router.post('/',(_req,res) => {
    res.send('create a new Task');
});

router.put('/',(_req,res) => {
    res.send('update a Task');
});

router.delete('/',(_req,res) => {
    res.send('delete a Task');
});

export default router;
import { useFetch } from '../../hooks/barrel.file'
import { TaskItem } from "./TaskItem"
import "./estilos.css"

export const Tasks =  ({ openModalEditTodo }) => {

  const { data,loading } = useFetch();

  if(data == undefined) return; 

  
  
  return (
    <section>
      {
        data.map((task) => {
          return <TaskItem key={task._id} data={task} openModalEditTodo={ openModalEditTodo } />
        })
      }
    </section>
  )
}
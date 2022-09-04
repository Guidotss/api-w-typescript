import { useEffect } from "react"
import { useFetch } from "../../hooks/useFetch" 
import { Tasks } from "./Tasks"
import './estilos.css'

export const TaskGrid = ({ openModalEditTodo }) => {
    const { data,setData,loading } = useFetch();  

  return (
    <div className="tasks">
        {
            loading
            ? <progress className="carga progress w-56"></progress>
            : <Tasks openModalEditTodo={ openModalEditTodo }/>
        }
    </div>
  )
}
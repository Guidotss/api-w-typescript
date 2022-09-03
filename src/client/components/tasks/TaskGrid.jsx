import { useFetch } from "../../hooks/useFetch" 
import { Tasks } from "./Tasks"
import './estilos.css'

export const TaskGrid = () => {
    const { loading } = useFetch();
  return (
    <div className="tasks">
        {
            loading
            ? <progress className="carga progress w-56"></progress>
            : <Tasks/>
        }
    </div>
  )
}
import { useEffect } from "react"
import { useFetch } from "../../hooks/useFetch" 
import { Tasks } from "./Tasks"
import './estilos.css'

export const TaskGrid = () => {
    const { data,setData,loading } = useFetch();

    useEffect(() => {
      console.log("hola");   
    }, [data])

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
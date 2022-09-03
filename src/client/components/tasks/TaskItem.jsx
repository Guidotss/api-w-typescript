import { useState } from "react";
import { useTodo,useRenderTodo } from "../../hooks/barrel.file";
import "./estilos.css";


export const TaskItem = ({data}) => {

  const { handleDeleteTodo,handleEditTodo } = useTodo();
  const { openModalAddTodo } = useRenderTodo();

  const getTaskByIdAndDelete = (id) => {
    handleDeleteTodo(id);
    window.location.reload();
  }

  const getTaskByIdAndEdit = () => {
    openModalAddTodo(id);
  }

  return(
    <div className="card">
        <div className="card-body">
            <h3 className="card-title">{data.title}</h3>
            <h5>{data.description}</h5>
            <div className="btn-group">
                <button className="btn btn-outline btn-error" onClick={() => getTaskByIdAndDelete(data._id)}>Detele</button>
                <button className="btn btn-outline btn-warning" onClick={openModalAddTodo}>Edit</button>
                <button className="btn btn-outline btn-success">Complete</button>
                <button className="btn btn-outline btn-info">Incomplete</button>
            </div>
        </div>
    </div>
  )
}
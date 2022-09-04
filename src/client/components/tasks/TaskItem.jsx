import { useState } from "react";
import { useTodo,useRenderTodo } from "../../hooks/barrel.file";
import { EditForm } from "../barrel.file";
import "./estilos.css";



export const TaskItem = ({data, openModalEditTodo}) => {

  const { handleDeleteTodo,handleEditTodo } = useTodo();

  const getTaskByIdAndDelete = (id) => {
    handleDeleteTodo(id);
    window.location.reload();
  }

  const getTask = (id) => {
    const taskId = JSON.stringify(id);
    localStorage.setItem("id", taskId);
  }

  return(
    <div className="card">
        <div className="card-body">
            <h3 className="card-title">{data.title}</h3>
            <h5>{data.description}</h5>
            <div className="btn-group">
                <button className="btn btn-outline btn-error" onClick={() => getTaskByIdAndDelete(data._id)}>Detele</button>
                <button className="btn btn-outline btn-warning" onClick={ openModalEditTodo } onClickCapture={() => getTask(data._id)}>Edit</button>
                <button className="btn btn-outline btn-success">Complete</button>
                <button className="btn btn-outline btn-info">Incomplete</button>
            </div>
        </div>
    </div>
  )
}
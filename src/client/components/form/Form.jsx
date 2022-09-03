import { useEffect } from "react";
import { useForm,useRenderTodo } from "../../hooks/barrel.file";
import './estilos.css'




export const Form = ({ closeModalAddTodo }) => {

  const {input,onIputChange,} = useForm({
    title:"",
    description:""
  });

  const {title , description}  = input; 


  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title,
      description,
    }

    console.log(newTask);
  }



  return (
    <div className="card">
        <div className="card-body">
            <h2 className="card-title">Create Task</h2>

            <button className="closeFormAddTodo" onClick={ closeModalAddTodo }>
              <span aria-hidden="true">&times;</span>
            </button>

            <form onSubmit={ handleSubmit }>
                <input className="form-control input input-bordered input-primary w-full max-w-xs" type="text" name="title" onChange={onIputChange} value={ title } />
                <input className="form-control input input-bordered input-primary w-full max-w-xs" type="text" name="description" onChange={onIputChange} value={ description }/>
                <button className="btn btn-outline btn-success addTodo">Add Task</button>
            </form>

        </div>
    </div>
  )
}
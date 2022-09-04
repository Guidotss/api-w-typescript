import { useForm } from "../../hooks/barrel.file";
import { useTodo } from "../../hooks/barrel.file";

export const EditForm = ({ closeModalEditTodo }) => {
    const { input, onIputChange, reset } = useForm({
        title: "",
        description: "",
    }) ;

    const { handleEditTodo } = useTodo();

    const {title, description} = input; 

    const handleSubmit = (e) => {
        e.preventDefault(); 
        const id = JSON.parse(localStorage.getItem("id"));
        
        const editedTask = {
            id,
            title,
            description,
        }
        handleEditTodo(editedTask);
        reset();
        window.location.reload();
    }

  return (
    <div className="card">
        <div className="card-body">
            <h2 className="card-title">Edit Task</h2>

            <button className="closeFormAddTodo" onClick={ closeModalEditTodo }>
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
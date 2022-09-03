import "./estilos.css";

export const TaskItem = ({data}) => {

    if(data == undefined) return;     

  return(
    <div className="card">
        <div className="card-body">
            <h3 className="card-title">{data.title}</h3>
            <h5>{data.description}</h5>
            <div className="btn-group">
                <button className="btn btn-outline btn-error">Detele</button>
                <button className="btn btn-outline btn-warning">Edit</button>
                <button className="btn btn-outline btn-success">Complete</button>
                <button className="btn btn-outline btn-info">Incomplete</button>
            </div>
        </div>
    </div>
  )
}
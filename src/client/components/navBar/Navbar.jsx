import "./estilos.css"; 

export const Navbar = () => {
  return (
    <header>
        <h1>Task app</h1>
        <nav>
            <form action="/task" method="post">
                <input className="input input-bordered w-full max-w-xs" type="text" name="tasName" />
                <input className="input input-bordered w-full max-w-xs" type="text" name="description" />
            </form>
        </nav>
    </header>
  )
}
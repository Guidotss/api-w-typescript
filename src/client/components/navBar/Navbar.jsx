import { useEffect } from 'react'
import { AddForm } from '../barrel.file'
import { useForm } from '../../hooks/barrel.file'
import "./estilos.css"; 



export const Navbar = ({ openModalAddTodo }) => {
  return (
    <header>
        <h1>Task app</h1>
        <nav>
          <button className="btn btn-outline btn-error" onClick={ openModalAddTodo }>Add Task</button>
        </nav>
    </header>
  )
}
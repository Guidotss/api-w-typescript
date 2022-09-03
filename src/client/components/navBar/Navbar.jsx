import { useEffect } from 'react'
import { Form } from '../form/Form'
import { useRenderTodo, useForm } from '../../hooks/barrel.file'
import "./estilos.css"; 



export const Navbar = ({ openModalAddTodo, renderTodo }) => {
  return (
    <header>
        <h1>Task app</h1>
        <nav>
          <button className="btn btn-outline btn-error" onClick={ openModalAddTodo }>Add Task</button>
        </nav>
    </header>
  )
}
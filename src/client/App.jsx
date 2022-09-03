import { useEffect, useState } from 'react'
import { useRenderTodo } from './hooks/barrel.file'
import { Task, Navbar, Form } from './components/barrel.file'


function App() {
  
  const { renderTodo,openModalAddTodo,closeModalAddTodo } = useRenderTodo()

  return (
    <div className="App">
       <Navbar openModalAddTodo={ openModalAddTodo } renderTodo={ renderTodo }/>
       {
        renderTodo 
        ? <Form closeModalAddTodo={ closeModalAddTodo }/>
        : <Task/>
       }
    </div>
  )
}

export default App

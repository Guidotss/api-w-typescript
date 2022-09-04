import { useEffect, useState } from 'react'
import { useRenderTodo } from './hooks/barrel.file'
import { TaskGrid, Navbar, AddForm, EditForm } from './components/barrel.file'


function App() {
  
  const { renderTodo,openModalAddTodo,closeModalAddTodo,renderEditTodo,openModalEditTodo,closeModalEditTodo } = useRenderTodo(); 

  return (
    <div className="App">
       <Navbar openModalAddTodo={ openModalAddTodo } renderTodo={ renderTodo }/>
       {
        renderEditTodo
        ? <EditForm closeModalEditTodo={ closeModalEditTodo }/>
        : null
      }
       {
        renderTodo
        ? <AddForm closeModalAddTodo={ closeModalAddTodo }/> 
        : <TaskGrid openModalEditTodo={ openModalEditTodo }/> 
       }
    </div>
  )
}

export default App

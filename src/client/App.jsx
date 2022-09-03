import { useEffect, useState } from 'react'
import { useRenderTodo } from './hooks/barrel.file'
import { TaskGrid, Navbar, AddForm } from './components/barrel.file'


function App() {
  
  const { renderTodo,openModalAddTodo,closeModalAddTodo } = useRenderTodo()
  const [] = useState(false)

  return (
    <div className="App">
       <Navbar openModalAddTodo={ openModalAddTodo } renderTodo={ renderTodo }/>
       {
        renderTodo 
        ? <AddForm closeModalAddTodo={ closeModalAddTodo }/>
        : <TaskGrid/> 
       }
    </div>
  )
}

export default App

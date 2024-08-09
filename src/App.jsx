import { useEffect, useState } from 'react'
import { TodoContextProvider } from './contexts/todoContext'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'


function App() {
  
  const [todos,setTodos] = useState([])

// Note: todo that is used in the functions is an object don't comfuse with the string


  const addTodo = (todo)=>{
    console.log("add");
    
    setTodos((prev)=>{
      return [todo,...prev]
    })
  }

  const editTodo = (id,msg)=>{
    
    setTodos((prev)=>{
              return prev.map((item)=>(item.id===id?{...item,content:msg}:item))
    })
    
  }

  const deleteTodo = (id)=>{
    console.log("delete");
    
    setTodos((prev)=>{
      return prev.filter((item)=>(item.id!==id))
    })

  }

  const toggleTodo = (id)=>{
    console.log("toggle");
    
    setTodos((prev)=>{
      return prev.map((item)=>(item.id===id?{...item,isCompleted:!item.isCompleted}:item))
    })
  }

  

  
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    console.log(todos);
    
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])
  

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])




  

  return (
    <TodoContextProvider value={{todos,addTodo,deleteTodo,editTodo,toggleTodo}}>

              <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {
                          todos.map((todo)=>(
                            <div className="w-lvw" key={todo.id}>

                              <TodoItem todo = {todo}/>

                            </div>
                          ))
                        }
                    </div>
                </div>
            </div>
     
    </TodoContextProvider>
  )
}

export default App

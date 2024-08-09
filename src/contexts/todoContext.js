
import { useContext, createContext } from "react";

export const todoContext = createContext({
    todos:[
        {
            id:1,
            content:"Do Home Work",
            isCompleted:false
        }
    ],

    addTodo: (todo)=>{},

    deleteTodo: (id)=>{},

    editTodo:(id,todo)=>{},

    toggleTodo: (id)=>{}
})

export const TodoContextProvider = todoContext.Provider

export const useTodo = () => {
    return useContext(todoContext)
}
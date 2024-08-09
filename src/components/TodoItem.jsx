import { useState } from "react";
import { useTodo } from "../contexts/todoContext";

function TodoItem({ todo }) {
    const {editTodo,toggleTodo,deleteTodo} = useTodo()
    const [todoMsg, setTodoMsg] = useState(todo.content )
    const [edit,setEdit] = useState(false)

    const toggleCompleted = ()=>{
        toggleTodo(todo.id)
    }

    const editComplete = ()=>{
        editTodo(todo.id,todoMsg);
        setEdit((prev)=>!prev)
    }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.isCompleted ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.isCompleted}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    edit ? "border-black/10 px-2" : "border-transparent"
                } ${todo.isCompleted ? "line-through" : ""}`}
                
                value={todoMsg}
                
                onChange={(e) => setTodoMsg(e.target.value)}

                readOnly={!edit}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    console.log(`edit:${edit}`);
                    
                    if (todo.isCompleted) return;

                    if (edit) {
                        editComplete();
                    } 
                    else 
                    setEdit((prev) => !prev);
                }}
                disabled={todo.isCompleted}
            >
                {edit ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;

import { Trash2 } from "lucide-react";
import { Todo } from "../types/todo"


interface TodoItemProps {
    todo: Todo;

    //"()" shows that type of the prop is function
    //"id: number, completed: boolean" is the information we need when we 'check' item in todo list, 
    // which is the info we need to paste to the parent to change the state of a todo item 
    onCompletedChange: (id: number, completed: boolean) => void;
    onDelete: (id: number) => void;
}

export default function TodoItem({todo, onCompletedChange, onDelete}: TodoItemProps) {
    return(
        <div className="flex items-center gap-1">
            <label className="flex items-center gap-2 rounded-md p-3 bg-gray-100 hover:bg-gray-200 grow">
               <input
               type="checkbox"
               checked={todo.completed}
               //implement the callback
               //when checkbox clicked, the callback function onCompletedChange is called
               onChange={(e) => onCompletedChange(todo.id, e.target.checked)}
               className="scale-125 ml-1"
               /> 
               <span className={todo.completed ? "line-through text-gray-500" : ""}>
               {todo.title}
               </span>
            </label>
            <button
            onClick={() => onDelete(todo.id)} 
            className="p-2 hover:bg-gray-200 rounded-xl">
                <Trash2 size={20} className="text-gray-500" />
            </button>
        </div>
    )
}
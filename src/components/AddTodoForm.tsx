import { useState } from "react";

interface AddTodoFormProps {
    onSubmit: (title: string) => void;
}

export default function AddTodoForm({onSubmit}: AddTodoFormProps) {
    const[input, setInput] = useState("");

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!input.trim()) return;

        onSubmit(input);
        setInput("");
    }
    return(
        <form className="flex shadow-md shadow-[#802be257] rounded-xl" onSubmit={handleSubmit}>
            <input 
            value = {input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What's need to be done?"
            className="rounded-s-xl grow p-2 border-violet-500 border"
            />
            <button 
            type="submit"
            className="w-16 rounded-e-xl hover:shadow-[inset_0_3px_0_rgba(0,0,0,0.3)] text-white bg-violet-500"
            >
               Add
            </button>
        </form>
    )
}
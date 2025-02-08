import { useEffect, useState } from "react";
import { sampleData } from "../data/todos";
import { Todo } from "../types/todo";

export default function useTodos() {
  //implement React state
  //useState is an import from React, which is a hook.
  //const[todos, setTodos] = useState<Todo[]>(sampleData) if we didnt declare the type Todo[] to the variables
  //todos value is the value of a todo when we first open the app, extracted frome sampleData
  //setTodos is the function to set the todos
  const[todos, setTodos] = useState(() => {

    //?
    const savedTodos: Todo[] = JSON.parse(
      localStorage.getItem("todos") || "[]"
    );
    return savedTodos.length > 0 ? savedTodos : sampleData;
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  function setTodoCompleted(id: number, completed: boolean) {
    // alert(`Todo with id ${id} is ${completed ? "now completed": "not completed"}`);

    //whatever we return in the arrow function will be passed as the new state of a todo
    //map() is a usually used function in React, in order to transform an array into a different array
    setTodos((prevTodos) => prevTodos.map(todo => (todo.id === id ? {...todo, completed} : todo)));
  }
  //?
  function addTodo(title: string) {
    setTodos(prevTodos => [
      {
        id: Date.now(),
        title,
        completed: false
      },
      ...prevTodos,
    ]);
  }

  
  //?
  function deleteTodo(id: number) {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
  }

  function deleteAllCompletedTodos() {
    setTodos(prevTodos => prevTodos.filter(todo => !todo.completed))
  }

  return {
    todos,
    setTodoCompleted,
    addTodo,
    deleteTodo,
    deleteAllCompletedTodos
  }
}
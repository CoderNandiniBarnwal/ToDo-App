//SIMPLE TODO APP
//App.jsx
// import Modal from "./Components/Modal";
import TodoForm from "./Components/todoForm";
import TodoList from "./Components/todoList";
import { useEffect, useState } from "react";

function App() {
  const [todo, setTodo] = useState(() => {
    const savedItem = localStorage.getItem("todo");
    return savedItem ? JSON.parse(savedItem) : [];
  });

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  const [isActive, setIsActive] = useState();
  return (
    <>
      <Modal
        todo={todo}
        setTodo={setTodo}
        isActive={isActive}
        setIsActive={setIsActive}
      />
      <TodoForm todo={todo} setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo} />
    </>
  );
}

export default App;

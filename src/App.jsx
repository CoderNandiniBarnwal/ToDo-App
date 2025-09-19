//SIMPLE TODO APP
//App.jsx

// import EditPage from "./Components/EditPage";
import EditPage from "./Components/EditPage";
import Modal from "./Components/Modal";
import { useEffect, useState } from "react";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";

function App() {
  const [todo, setTodo] = useState(() => {
    const savedItem = localStorage.getItem("todo");
    return savedItem ? JSON.parse(savedItem) : [];
  });

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  const [isActive, setIsActive] = useState();
  const [todoId, setTodoId] = useState();
  const [isEditable, setIsEditable] = useState();
  const [inputValue, setInputValue] = useState();
  const [editTodoInput, setEditTodoInput] = useState();

  return (
    <div className="overflow-hidden">
      <EditPage
        todo={todo}
        setTodo={setTodo}
        editTodoInput={editTodoInput}
        setEditTodoInput={setEditTodoInput}
        isEditable={isEditable}
        setIsEditable={setIsEditable}
        todoId={todoId}
      />
      <Modal
        todo={todo}
        setTodo={setTodo}
        isActive={isActive}
        setIsActive={setIsActive}
        todoId={todoId}
      />
      <TodoForm
        todo={todo}
        setTodo={setTodo}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <div className="overflow-scroll">
        <TodoList
          todo={todo}
          setTodo={setTodo}
          setIsActive={setIsActive}
          setTodoId={setTodoId}
          isEditable={isEditable}
          setIsEditable={setIsEditable}
          setEditTodoInput={setEditTodoInput}
        />
      </div>
    </div>
  );
}

export default App;

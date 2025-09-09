//SIMPLE TODO APP
//App.jsx

// import EditPage from "./Components/EditPage";
import Modal from "./Components/Modal";
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
  const [todoId, setTodoId] = useState();
  const [isEditable, setIsEditable] = useState();
  const [inputValue, setInputValue] = useState();
  const [editTodoInput, setEditTodoInput] = useState();

  const confirmEdit = (id) => {
    setTodo(() =>
      todo.map((item) =>
        item.id === id ? { ...item, text: editTodoInput } : item
      )
    );
    isEditable ? setIsEditable(!isEditable) : "";
  };

  function cancelDelete() {
    isEditable ? setIsEditable(!isEditable) : "";
  }
  return (
    <>
      {/* <EditPage isEditable={isEditable} setIsEditable={setIsEditable} /> */}

      {isEditable && (
        <div className="bg-gray-600 w-[20%] m-auto text-center py-7 rounded-xl absolute top-[250px] right-0 left-0">
          <h1 className="text-2xl font-bold mb-4 text-white ">Edit Todo</h1>

          <input
            type="text"
            vlaue={editTodoInput}
            onChange={(e) => {
              setEditTodoInput(e.target.value);
            }}
            className="px-2"
          />
          <br />

          {todo.map((item) => (
            <button
              className="border-2 px-5 mt-3 rounded-2xl hover:bg-green-400 py-2 mx-2"
              onClick={() => confirmEdit(item.id)}
            >
              Confirm
            </button>
          ))}
          <button
            className="border-2 px-5 mt-3 rounded-2xl hover:bg-red-400 py-2 mx-2"
            onClick={cancelDelete}
          >
            Cancel
          </button>
        </div>
      )}

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
      <TodoList
        todo={todo}
        setTodo={setTodo}
        setIsActive={setIsActive}
        setTodoId={setTodoId}
        isEditable={isEditable}
        setIsEditable={setIsEditable}
      />
    </>
  );
}

export default App;

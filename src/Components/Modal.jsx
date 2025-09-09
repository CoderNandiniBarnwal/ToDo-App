import TodoList from "./todoList";

export default function Modal({
  todo,
  setTodo,
  isActive,
  setIsActive,
  todoId,
}) {
  const deleteTodo = (id) => {
    setTodo(todo.filter((itemToDlt) => itemToDlt.id !== id));
    isActive ? setIsActive(!isActive) : "";
  };
  function cancelDelete() {
    isActive ? setIsActive(!isActive) : "";
  }
  return (
    <>
      {isActive && (
        <div className="bg-gray-600 w-[20%] text-white m-auto text-center py-7 rounded-xl absolute top-[250px] right-0 left-0">
          <h1 className="text-2xl font-bold">Delete Todo</h1>
          <p className="font-semibold">Are you sure you want to delete it ?</p>
          {/* {todo.map((item) => ( */}
          <button
            className="border-2 px-5 mt-3 rounded-2xl hover:bg-green-400 py-2 mx-2"
            onClick={() => deleteTodo(todoId)}
          >
            Confirm
          </button>
          {/* ))} */}
          <button
            className="border-2 px-5 mt-3 rounded-2xl hover:bg-red-400 py-2 mx-2"
            onClick={cancelDelete}
          >
            Cancel
          </button>
        </div>
      )}
    </>
  );
}

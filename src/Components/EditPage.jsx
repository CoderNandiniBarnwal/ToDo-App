export default function EditPage({
  todo,
  setTodo,
  editTodoInput,
  setEditTodoInput,
  isEditable,
  setIsEditable,
  todoId,
}) {
  const confirmEdit = (id) => {
    const isDuplicate = todo.some(
      (item) =>
        item.text.toLowerCase().trim() === editTodoInput.toLowerCase().trim()
    );
    if (isDuplicate) {
      alert(editTodoInput + " already there");
      setEditTodoInput("");
      return;
    }
    if (editTodoInput.trim() === "") {
      isEditable ? setIsEditable(!isEditable) : "";
      return;
    }
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
      {isEditable && (
        <div className="bg-gray-600 w-[20%] m-auto text-center py-7 rounded-xl absolute top-[250px] right-0 left-0">
          <h1 className="text-2xl font-bold mb-4 text-white ">Edit Todo</h1>

          <input
            type="text"
            value={editTodoInput}
            onChange={(e) => {
              setEditTodoInput(e.target.value);
            }}
            className="px-2 hide-scrollbar"
          />
          <br />

          {/* {todo.map((item) => ( */}
          <button
            className="border-2 px-5 mt-3 rounded-2xl hover:bg-green-400 py-2 mx-2 text-white"
            onClick={() => confirmEdit(todoId)}
          >
            Confirm
          </button>
          {/* ))} */}
          <button
            className="border-2 px-5 mt-3 rounded-2xl hover:bg-red-400 py-2 mx-2 text-white"
            onClick={cancelDelete}
          >
            Cancel
          </button>
        </div>
      )}
    </>
  );
}

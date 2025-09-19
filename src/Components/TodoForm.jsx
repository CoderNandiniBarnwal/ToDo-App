//TodoForm.jsx

export default function TodoForm({ todo, setTodo, inputValue, setInputValue }) {
  function addTodo() {
    const isDuplicate = todo.some(
      (item) => inputValue.toLowerCase() === item.text.toLowerCase()
    );

    if (isDuplicate) {
      alert(inputValue + " Already there");
      setInputValue("");
      return;
    }

    if (inputValue.trim() === "") {
      setInputValue("");
      return;
    }

    setTodo([...todo, { id: Date.now(), text: inputValue, completed: false }]);
    setInputValue("");
  }

  return (
    <>
      <div className="border-[2px] p-6 text-center">
        <h1 className=" text-5xl font-bold mb-14">Todo App</h1>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          placeholder="Add Something"
          className="border-[1px] px-10 py-4 w-[700px] text-2xl outline-none"
        />
        <button
          className="bg-green-600 px-10 py-4 text-2xl font-bold text-white"
          onClick={addTodo}
        >
          Add
        </button>
      </div>
    </>
  );
}

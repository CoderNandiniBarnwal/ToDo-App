//TodoList.jsx

import Modal from "./Modal";

export default function TodoList({ todo, showModal }) {
  //   const deleteTodo = (id) => {
  //     setTodo(todo.filter((itemToDlt) => itemToDlt.id !== id));
  //   };
  // const editTodo = (id) => {};

  return (
    <>
      <ul>
        {todo && (
          <li className="w-[55%] m-auto mt-7 border-[2px]">
            <div className="text-left text-2xl border-[2px] w-full">
              {todo.map((item) => (
                <div className=" border-[2px] w-full flex" key={item.id}>
                  <div className="w-[90%] mt-2 px-5">{item.text}</div>

                  <button
                    // onClick={() => editTodo(item.id)}
                    className="text-3xl text-yellow-400 w-[7%] py-1"
                  >
                    <i className="fa-solid fa-file-pen" />
                  </button>

                  <button
                    // onClick={() => deleteTodo(item.id)}
                    onClick={() => showModal(item.id)}
                    className="text-3xl text-red-400 py-1 w-[7%]"
                  >
                    <i className="fa-solid fa-trash" />
                  </button>
                </div>
              ))}
            </div>
          </li>
        )}
      </ul>
    </>
  );
}

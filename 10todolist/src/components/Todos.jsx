import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // local state for editing
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  console.log(todos)

  const handleUpdate = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const saveUpdate = (id) => {
    dispatch(updateTodo({ id, text: editText }));
    setEditId(null); // close edit mode
    setEditText("");
  };

  return (
    <>
      <div className="text-xl font-bold mb-4">Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {editId === todo.id ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="text-black px-2 py-1 rounded"
              />
            ) : (
              <div className="text-white">{todo.text}</div>
            )}

            <div className="flex space-x-2">
              {editId === todo.id ? (
                <button
                  onClick={() => saveUpdate(todo.id)}
                  className="text-white bg-green-500 border-0 py-1 px-4 hover:bg-green-600 rounded text-md"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => handleUpdate(todo.id, todo.text)}
                  className="text-white bg-blue-500 border-0 py-1 px-4 hover:bg-blue-600 rounded text-md"
                >
                  Edit
                </button>
              )}

              <button
                onClick={() => dispatch(deleteTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-1 px-4 hover:bg-red-600 rounded text-md"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;

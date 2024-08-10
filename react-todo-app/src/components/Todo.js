import React, { useRef, useState } from "react";
import TODO_ICON from "../assets/todo_icon.png";
import TodoItems from "./TodoItems";
const Todo = () => {
  const [toDoList, setToDoList] = useState([]);
  const inputRef = useRef();
  const add = () => {
    const inpuText = inputRef.current.value.trim();
    if (inpuText === "") {
      return null;
    }
    const newTodo = {
      id: Date.now(),
      text: inpuText,
      isComplate: false,
    };
    setToDoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setToDoList((prvTodos) => {
      return prvTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <section className="bg-lime-950 place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      <div className="flex items-center mt-7 gap-2">
        <img className="w-8" src={TODO_ICON} alt="" />
        <h1 className="text-3xl text-white font-semibold">To Do List</h1>
      </div>
      <div className="flex items-center my-7 bg-white rounded-full">
        <input
          ref={inputRef}
          className=" placeholder-white bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
          type="text"
          placeholder="Add your text"
        />
        <button
          onClick={add}
          className="border-none rounded-full bg-gray-900 w-32 h-14 text-white text-lg font-medium cursor-pointer"
        >
          Add +
        </button>
      </div>
      <div>
        {toDoList.map((item, index) => {
          return (
            <TodoItems
              key={index}
              text={item.text}
              id={item.id}
              isComplate={item.isComplate}
              deleteTodo ={deleteTodo}
            />
          );
        })}
      </div>
    </section>
  );
};
export default Todo;

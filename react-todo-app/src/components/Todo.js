import React from "react";
import TODO_ICON from "../assets/todo_icon.png";
const Todo = () => {
  return (
    <section className="bg-red-800 place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      <div className="flex items-center mt-7 gap-2">
        <img className="w-8" src={TODO_ICON} alt="" />
        <h1 className="text-3xl font-semibold">To Do List</h1>
      </div>

      <div className="flex items-center my-7 bg-white rounded-full">
        <input
          className=" placeholder-white bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
          type="text"
          placeholder="Add your text"
        />
        <button className="border-none rounded-full bg-gray-900 w-32 h-14 text-white text-lg font-medium cursor-pointer">
          Add +
        </button>
      </div>
    </section>
  );
};

export default Todo;

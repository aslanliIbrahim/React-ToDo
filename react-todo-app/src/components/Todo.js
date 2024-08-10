import React from "react";
import TODO_ICON from "../assets/todo_icon.png"
const Todo = () => {
  return (
    <section className="bg-red-800 place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
        <div className="flex items-center mt-7 gap-2">
            <img className="w-8" src={TODO_ICON} alt=""/>
            <h1 className="text-3xl font-semibold">To Do List</h1>
        </div>
    </section>
  );
};

export default Todo;

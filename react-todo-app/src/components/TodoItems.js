import React from "react";
import TICK from "../assets/tick.png";
import NOT_TICK from "../assets/not_tick.png";
import DELETE from "../assets/delete.png";

const TodoItems = ({ text, id, isComplate, deleteTodo, toggle }) => {
  return (
    <section className="flex items-center my-3 gap-2">
      <div
        onClick={() => {
          toggle(id);
        }}
        className="flex flex-1 items-center cursor-pointer"
      >
        <img className="w-7" src={isComplate ? TICK : NOT_TICK} alt="" />
        <p className={`text-white ml-4 text-[17px] decoration-slate-500 ${isComplate ? "line-through" : ""}`}>{text}</p>
      </div>

      <img
        src={DELETE}
        onClick={() => {
          deleteTodo(id);
        }}
        alt=""
        className="w-3.5 cursor-pointer"
      />
    </section>
  );
};

export default TodoItems;

import React from "react";

const Background = (props) => {
  return (
    <div className="bg-stone-900 grid py-4 min-h-screen">{props.children}</div>
  );
};

export default Background;

import React, { useState, memo } from "react";
import "./style.css";
import ChildA from "./ChildA";

const ParentComponent = ({ children }) => {
  console.log("PARENT RENDER OLDU");
  const [counter, setCounter] = useState(0);
  const [title, setTitle] = useState("boş");

  return (
    <div>
      <ChildA title={title} />
      <div>
        <p>{counter}</p>
        <button
          onClick={() => {
            // setTitle(prev => {
            //   return prev === "boş" ? (prev = "dolu") : (prev = "boş");
            // });
            setTitle("dolu");
            setCounter(prev => prev + 1);
          }}
        >
          Artır
        </button>
      </div>
    </div>
  );
};

export default ParentComponent;

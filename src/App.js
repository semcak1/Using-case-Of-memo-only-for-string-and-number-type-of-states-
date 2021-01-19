import React, { useState, memo } from "react";
import "./style.css";
import ChildA from "./ChildA";
import ParentComponent from "./Parent";

export default function App() {
  const [counter, setCounter] = useState(0);
  console.log("APP RENDER OLDI");
  return (
    <div>
      <ParentComponent>
        // <ChildA counter={counter} />
      </ParentComponent>
    </div>
  );
}

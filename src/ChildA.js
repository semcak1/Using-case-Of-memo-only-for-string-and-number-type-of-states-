import React, { useState, memo } from "react";
import "./style.css";

const ChildA = ({ title }) => {
  console.log("CHİLD A RENDER OLDU");
  return (
    <div>
      <p>{title}</p>
    </div>
  );
};

export default memo(ChildA);

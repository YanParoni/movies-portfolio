import React from "react";
import "./LoadBtn.css";

const LoadBtn = props => {
  return (
    <div className="loadbtn" onClick={props.onClick}>
      <p>{props.text}</p>
    </div>
  );
};

export default LoadBtn;
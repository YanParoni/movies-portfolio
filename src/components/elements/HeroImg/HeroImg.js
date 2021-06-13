
import React from "react";
import "./HeroImg.css";

const HeroImg = props => {
  return (
    <div
      className="heroimage"
      style={{
        background: `linear-gradient(to bottom, rgba(0,0,0,0)
      39%, rgba(0,0,0,0)
      41%, rgba(0,0,0,0.65)
      100%), url('${props.image}'), #1c1c1c`
      }}
    >
      <div className="heroimage-content">
        <div className="heroimage-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
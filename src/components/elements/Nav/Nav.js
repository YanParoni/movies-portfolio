import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = props => {
  return (
    <div className="navigation">
      <div className="navigation-content">
        <Link to="/">
        <img className="back" src="./images/back.svg" />
        </Link>
      
      </div>
    </div>
  );
};

export default Nav;
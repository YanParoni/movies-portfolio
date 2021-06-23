import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div className=" h-1/4 container flex flex-row justify-between">
        <Link to="/">
          <img className="m-4 pl-12 " src="./images/logo.png" alt="rmdb-logo" />
        </Link>
        <a target='_blank' href="https://developers.themoviedb.org/3">
        <img
          className="w-48 p-1 pr-12"
          src="./images/tmdb-logo.svg"
          alt="tmdb-logo"
        />
        </a>
      </div>
    </div>
  );
};

export default Header;

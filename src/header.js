import React, { useState } from "react";
import { useMovieContext } from './Moviecontext'; // Import the updated hook
import "./css/header.css";

function Header(params) {
  const [headTitle, setHtitle] = useState("Best Movies");
  const { setCategory } = useMovieContext();

  const CategoryChange = (newCategory) => {
    setCategory(newCategory);
    console.log("selectcat");
  }


  return (
    <div className="wrphead">
      <div className="dropdown">
        <button
          className="btn  dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Movies Categories
        </button>
        <div
          id="dropdownmenu"
          className="dropdown-menu"
          aria-labelledby="dropdownMenuButton"
        >
          <a className="dropdown-item" href="#" onClick={() => CategoryChange('movie')}>
            Action
          </a>
          <a className="dropdown-item" href="#" onClick={() => CategoryChange('series')}>
            drama
          </a>
          <a className="dropdown-item" href="#" onClick={() => CategoryChange('episode')}>
            comedy
          </a>
        </div>
        <img id="logo" src={require("./logo.jpg")} />
      </div>

      <nav className="nav justify-content-center">
        <h1>{headTitle}</h1>
      </nav>
      <div className="authlinks">
        {/* <a className="link reg" href="#">
          Register
        </a>
        <a className="link login" href="#">
          Login
        </a> */}
      </div>
    </div>
  );
}

export default Header;

import React, { useState } from "react";
import "./styles/Header.scss";
import { Link } from "react-router-dom";
const Header = () => {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };
  return (
    <div className="header">
      <div className="header__logo">
        <h1>
          <span className="first">De</span>Teem
        </h1>
      </div>
      <nav className={active ? "navbar active" : "navbar"}>
        <ul>
          <div className="close" onClick={showMenu}>
            +
          </div>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Experience</Link>
          </li>
          <li>
            <Link to="/">Education</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="menu">
        <i class="fa-solid fa-bars"></i>
      </div>
    </div>
  );
};
export default Header;

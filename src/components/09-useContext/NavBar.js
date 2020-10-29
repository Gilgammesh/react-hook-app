import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <NavLink
            exact
            activeClassName="active"
            className="nav-item nav-link"
            to="/home"
          >
            Home
          </NavLink>
          <NavLink
            exact
            activeClassName="active"
            className="nav-item nav-link"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            exact
            activeClassName="active"
            className="nav-item nav-link"
            to="/login"
          >
            Login
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
      <NavLink href="/" className="index-link">
        index
      </NavLink>
      <NavLink href="/home" className="home-link">
        home
      </NavLink>
    </nav>
  );
};

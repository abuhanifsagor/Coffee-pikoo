import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <div className="flex gap-4">
      <NavLink to="/about">About</NavLink>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/addcoffee">Add Coffee</NavLink>
    </div>
  );
};

export default Header;

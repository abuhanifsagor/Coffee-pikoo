import React from "react";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const Roots = () => {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

export default Roots;

import React from "react";
import NavBar from "./Navbar";

const Template = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default Template;

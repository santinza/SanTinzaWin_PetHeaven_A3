import React from "react";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav>
        <div className="menuitem">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/funcat">Cats</Link>
          <Link to="/fundog">Dogs</Link>
          <Link to="/adopt">Adopt</Link>
          <Link to="/register">Register</Link>
          <Link to="/releaseform">Release Form</Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

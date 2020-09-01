import React from "react";

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light p-1">
      <a className="navar-brand" href="https://www.google.co.in">
        <img
          src={require('../logo192.png')}
          width="25"
          height="25"
          className="d-inline-block align-top mr-1"
          alt=""
        />
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;

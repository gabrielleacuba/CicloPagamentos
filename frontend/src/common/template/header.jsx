import React from "react";
import Navbar from "./navbar";

const Header = (props) => {
  return (
    <header className="main-header">
      <a href="/#/" className="logo">
        <span className="logo-mini">
          <b>My</b>B
        </span>
        <span className="logo-lg">
          <i className="fa fa-money"></i>
          <b> My</b> {props.name}
        </span>
      </a>
      <nav className="navbar navbar-static-top">
        <a href className="sidebar-toggle" data-toggle="offcanvas"></a>
        <Navbar />
      </nav>
    </header>
  );
};

export default Header;

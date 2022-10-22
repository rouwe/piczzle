import React from "react";
import Brand from "../shared/components/Brand";
import Nav from "./header/Nav";
import Menu from "./header/Menu";
import "../scss/layout/Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__brand">
        <Brand brandType="text" />
      </div>
      <nav className="header__action">
        <Nav />
      </nav>
      <div className="header__menu">
        <Menu />
      </div>
    </header>
  );
}

export default Header;

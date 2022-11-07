import React from "react";
import { Link } from "react-router-dom";
import Brand from "../shared/components/Brand";
import Nav from "./header/Nav";
import Menu from "./header/Menu";
import "../scss/layout/Header.scss";
import { loggedIn } from "../Routes";

function Header() {
  const loggedUserHeaderStyle: React.CSSProperties = {
    gridTemplate: "'brand nav menu' min-content/ min-content 1fr max-content",
  };

  return (
    <header style={loggedIn ? loggedUserHeaderStyle : {}} className="header">
      <div className="header__brand">
        <Link to="/" children={<Brand brandType="text" />} />
      </div>
      <nav className="header__action">
        <Nav loggedIn={loggedIn} />
      </nav>
      <div className="header__menu">
        <Menu loggedIn={loggedIn} />
      </div>
    </header>
  );
}

export default Header;

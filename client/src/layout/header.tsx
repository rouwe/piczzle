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

  const navMenuHandler = (e: React.MouseEvent) => {
    const eventTarget = e.target;
    console.log(eventTarget);
    const headerAction = document.querySelector(
      ".header__action"
    ) as HTMLDivElement;
    const menuOpenIcon = document.querySelector(
      ".header__menu__open"
    ) as HTMLDivElement;
    const menuLogoutIcon = document.querySelector(
      ".header__menu__user"
    ) as HTMLDivElement;
    const menuCloseIcon = document.querySelector(
      ".header__menu__close"
    ) as HTMLDivElement;
    const actionDisplayStyle = headerAction.style.display;
    // If user is logged in
    if (localStorage.getItem("user") === "true") {
      menuCloseIcon.style.display = "none";
      menuOpenIcon.style.display = "none";
      menuLogoutIcon.style.display = "flex";
    } else {
      if (actionDisplayStyle === "" || actionDisplayStyle === "none") {
        headerAction.style.display = "flex";
        menuCloseIcon.style.display = "flex";
        menuOpenIcon.style.display = "none";
      } else {
        headerAction.style.display = "none";
        menuCloseIcon.style.display = "none";
        menuOpenIcon.style.display = "flex";
      }
    }
  };

  return (
    <header style={loggedIn ? loggedUserHeaderStyle : {}} className="header">
      <div className="header__brand">
        <Link to="/" children={<Brand brandType="text" />} />
      </div>
      <nav className="header__action">
        <Nav loggedIn={loggedIn} />
      </nav>
      <div onClickCapture={navMenuHandler} className="header__menu">
        <Menu loggedIn={loggedIn} />
      </div>
    </header>
  );
}

export default Header;

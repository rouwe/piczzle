import React from "react";
import { Link } from "react-router-dom";
import CTA from "../../shared/components/CTA";
import SocialLinks from "../../shared/components/SocialLinks";

function Nav() {
  const links = [
    { id: "navLink", page: "Home", path: "/" },
    { id: "navLink", page: "Contact", path: "/contact" },
    { id: "navLink", page: "About", path: "/about" },
  ];

  return (
    <>
      <ul className="header__action__nav-wrapper">
        {links.map(({ id, page, path }, idx) => (
          <li className="header__action__nav-wrapper__item" key={`${id}${idx}`}>
            <Link className="header__action__nav-wrapper__item__link" to={path}>
              {page}
            </Link>
          </li>
        ))}
      </ul>

      <hr className="header__action__nav-divider" />

      <div className="header__action__cta">
        <CTA className="cta" type="route" innerText="Log In" linkTo="/login" />
        <CTA
          className="cta"
          type="route"
          innerText="Sign Up"
          linkTo="/signup"
        />
      </div>

      <div className="header__action__social-links">
        <SocialLinks />
      </div>
    </>
  );
}

export default Nav;

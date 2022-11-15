import React from "react";
import CTA from "../../shared/components/CTA";
import RouteList from "../../shared/components/RouteList";
import SocialLinks from "../../shared/components/SocialLinks";
import { displayNone } from "../../utils/stylesSnippet";
import { UserAuthenticationType } from "../../shared/types/types";
import { setHeaderActiveLink } from "../../ts/interaction";

function Nav({ loggedIn }: UserAuthenticationType) {
  const routes = [
    { id: "navLink", page: "Home", path: "/" },
    { id: "navLink", page: "Contact", path: "/contact" },
    { id: "navLink", page: "About", path: "/about" },
  ];
  const structureClass = {
    ulClassName: "header__action__nav-wrapper",
    liClassName: "header__action__nav-wrapper__item",
    linkClassName: "header__action__nav-wrapper__item__link",
  };

  return (
    <>
      <RouteList
        routesArr={routes}
        structureClassNames={structureClass}
        styleSnippet={loggedIn ? displayNone : undefined}
      />

      {!loggedIn && (
        <>
          <hr className="header__action__nav-divider" />
          <div onClick={setHeaderActiveLink} className="header__action__cta">
            <CTA
              className="cta cta-route"
              type="route"
              innerText="Log In"
              linkTo="auth/login"
            />
            <CTA
              className="cta cta-route"
              type="route"
              innerText="Sign Up"
              linkTo="auth/signup"
            />
          </div>
        </>
      )}

      <div className="header__action__social-links">
        <SocialLinks />
      </div>
    </>
  );
}

export default Nav;

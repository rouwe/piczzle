import React from "react";
import RouteList from "../../shared/components/RouteList";
import SocialLinks from "../../shared/components/SocialLinks";

function FooterNav() {
  const piczzleNavSection = [
    { id: "piczzle", page: "Contact", path: "/contact" },
    { id: "piczzle", page: "About", path: "/about" },
  ];

  const moreNavSection = [
    { id: "more", page: "Terms", path: "/" },
    { id: "more", page: "Privacy", path: "/" },
    { id: "more", page: "Help", path: "/" },
  ];

  const navSectionClass = {
    ulClassName: "footer__nav__section__wrapper",
    liClassName: "footer__nav__section__wrapper__item",
    linkClassName: "footer__nav__section__wrapper__item__link",
  };

  return (
    <>
      <div className="footer__nav__section footer__nav__section__piczzle">
        <span className="footer__nav__section__header">Piczzle</span>
        <RouteList
          routesArr={piczzleNavSection}
          structureClassNames={navSectionClass}
        />
      </div>
      <div className="footer__nav__section footer__nav__section__more">
        <span className="footer__nav__section__header">More</span>
        <RouteList
          routesArr={moreNavSection}
          structureClassNames={navSectionClass}
        />
      </div>
      <div className="footer__nav__section footer__nav__section__social">
        <span className="footer__nav__section__header">Social</span>
        <div className="footer__nav__section__social-links">
          <SocialLinks />
        </div>
      </div>
    </>
  );
}

export default FooterNav;

import React from "react";
import Copyright from "../shared/components/Copyright";
import FooterBrand from "./footer/FooterBrand";
import FooterNav from "./footer/FooterNav";
import "../scss/layout/Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__brand">
        <FooterBrand />
      </div>
      <div className="footer__nav">
        <FooterNav />
      </div>
      <Copyright parent="footer" />
    </footer>
  );
}

export default Footer;

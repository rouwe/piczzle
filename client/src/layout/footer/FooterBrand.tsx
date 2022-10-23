import React from "react";
import Brand from "../../shared/components/Brand";

function FooterBrand() {
  return (
    <>
      <div className="footer__brand__logo">
        <Brand brandType="logo" />
      </div>
      <div className="footer__brand__text">
        <Brand brandType="text" />
      </div>
    </>
  );
}

export default FooterBrand;

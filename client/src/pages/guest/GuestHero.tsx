import React from "react";
import CTA from "../../shared/components/CTA";
import "../../scss/pages/guest/GuestHero.scss";

function GuestHero() {
  return (
    <>
      <div className="guest__hero__heading">
        <h1 className="guest__hero__heading__text">Puzzle in every snap</h1>
      </div>
      <div className="guest__hero__cta">
        <CTA
          className="cta cta-hero"
          type="route"
          linkTo={"./auth/login"}
          innerText="Play now"
        />
      </div>
    </>
  );
}

export default GuestHero;

import React from "react";
import GuestHero from "./GuestHero";
import GuestHowTo from "./GuestHowTo";
import "../../scss/pages/HomeGuest.scss";

function HomeGuest() {
  return (
    <div className="guest">
      <div className="guest__hero">
        <GuestHero />
      </div>
      <div className="guest__howto">
        <GuestHowTo />
      </div>
    </div>
  );
}

export default HomeGuest;

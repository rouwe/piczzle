import React from "react";
import HomeGuest from "./guest/HomeGuest";
import "../scss/pages/Pages.scss";

function Home() {
  return (
    <main className="home">
      <HomeGuest />
    </main>
  );
}

export default Home;

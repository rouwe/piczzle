import React from "react";
import HomeGuest from "./guest/HomeGuest";
import HomeUser from "./user/HomeUser";
function Home() {
  return (
    <main className="home">
      {/* <HomeGuest /> */}
      <HomeUser />
    </main>
  );
}

export default Home;

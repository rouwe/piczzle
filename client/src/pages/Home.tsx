import React from "react";
import HomeGuest from "./guest/HomeGuest";
import HomeUser from "./user/HomeUser";
import { UserAuthenticationType } from "../shared/types/types";

function Home({ loggedIn }: UserAuthenticationType) {
  return (
    <main className="home">{loggedIn ? <HomeUser /> : <HomeGuest />}</main>
  );
}

export default Home;

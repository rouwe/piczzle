import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import PageNotFound from "./pages/PageNotFound";
import { checkUserExist } from "./utils/authUtil";

// User authentication state
export const loggedIn = checkUserExist();
// Set username in local storage
if (loggedIn) localStorage.setItem("user", "true");

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home loggedIn={loggedIn} />} />
        <Route
          path="contact"
          element={loggedIn ? <Navigate to="/" /> : <Contact />}
        />
        <Route
          path="about"
          element={loggedIn ? <Navigate to="/" /> : <About />}
        />
        <Route
          path="auth/login"
          element={loggedIn ? <Navigate to="/" /> : <LogIn />}
        />
        <Route
          path="auth/signup"
          element={loggedIn ? <Navigate to="/" /> : <SignUp />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export { AppRoutes };

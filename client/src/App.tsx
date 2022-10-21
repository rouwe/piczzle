import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./Routes";
import "./scss/App.scss";

export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

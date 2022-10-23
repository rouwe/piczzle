import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./Routes";
import "./scss/App.scss";

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;

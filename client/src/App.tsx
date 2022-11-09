import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./Routes";
import Notification from "./shared/components/Notification";
import { notificationHandler } from "./ts/notificationHandler";
import "./scss/App.scss";

function App() {
  const [notificationHeader, setNotificationHeader] = useState("");
  const [notificationBody, setNotificationBody] = useState("");
  const [notificationStorage] = useState(
    localStorage.getItem("notificationObj")
  );
  useEffect(() => {
    notificationHandler({
      notificationStorage,
      setNotificationHeader,
      setNotificationBody,
    });
  }, [notificationStorage]);

  return (
    <>
      <Router>
        <AppRoutes />
      </Router>
      <Notification status={notificationHeader} message={notificationBody} />
    </>
  );
}

export default App;

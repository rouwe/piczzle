import React, { CSSProperties } from "react";

type NotificationType = {
  status: string;
  message: string;
};

const NotificatonIcon = ({ pathStyles }: { pathStyles: CSSProperties }) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      style={pathStyles}
      d="M15 26.25C13.5226 26.25 12.0597 25.959 10.6948 25.3936C9.3299 24.8283 8.08971 23.9996 7.04505 22.955C6.00039 21.9103 5.17172 20.6701 4.60635 19.3052C4.04099 17.9403 3.75 16.4774 3.75 15C3.75 13.5226 4.04099 12.0597 4.60636 10.6948C5.17172 9.3299 6.00039 8.08971 7.04505 7.04505C8.08971 6.00039 9.3299 5.17172 10.6948 4.60635C12.0597 4.04099 13.5226 3.75 15 3.75C16.4774 3.75 17.9403 4.04099 19.3052 4.60636C20.6701 5.17172 21.9103 6.00039 22.955 7.04505C23.9996 8.08971 24.8283 9.3299 25.3936 10.6948C25.959 12.0597 26.25 13.5226 26.25 15C26.25 16.4774 25.959 17.9403 25.3936 19.3052C24.8283 20.6701 23.9996 21.9103 22.9549 22.955C21.9103 23.9996 20.6701 24.8283 19.3052 25.3936C17.9403 25.959 16.4774 26.25 15 26.25L15 26.25Z"
      stroke="#333333"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      style={pathStyles}
      d="M11.25 11.25L18.75 18.75"
      stroke="#333333"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      style={pathStyles}
      d="M18.75 11.25L11.25 18.75"
      stroke="#333333"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

function Notification({ status, message }: NotificationType) {
  // Color mapping based on server response
  const checkNotificationObj = localStorage.getItem("notificationObj");
  const checkNotificationStyle = localStorage.getItem("notificationStyleObj");
  let notificationStyles: CSSProperties;
  let notificationIconStyles: CSSProperties;
  let notificationIconPathStyles: CSSProperties;

  if (checkNotificationObj && checkNotificationStyle) {
    // Parse JSON string and re-assign to vacant variables
    const styleObj = JSON.parse(checkNotificationStyle);
    notificationStyles = styleObj.notificationStyles;
    notificationIconStyles = styleObj.notificationIconStyles;
    notificationIconPathStyles = styleObj.notificationIconPathStyles;
  } else {
    // Assign empty object
    notificationStyles =
      notificationIconStyles =
      notificationIconPathStyles =
        {};
  }

  function closeNotificationHandler(e: React.MouseEvent) {
    /**
     * Close the notification popup
     * @e - mouse event instance
     */
    const notificationElement: HTMLDivElement | null =
      document.querySelector("#notification");
    if (notificationElement) {
      notificationElement.style.display = "none";
    }
  }

  return (
    <div style={notificationStyles} id="notification" className="notification">
      <span
        onClick={closeNotificationHandler}
        style={notificationIconStyles}
        className="notification__icon"
      >
        <NotificatonIcon pathStyles={notificationIconPathStyles} />
      </span>
      <span className="notification__message">{message}</span>
    </div>
  );
}

export default Notification;

import { addNotification, addNotificationStyle } from "./notificationHandler";
import * as serverErrors from '../utils/errors';

export function authSignup(
  e: React.FormEvent<HTMLFormElement>,
  userId: string,
  userPassword: string,
  repeatUserPassword: string
): void {
    /**
   * Signup handler for user authentication
   * @e - form event instance.
   * @userId - username payload.
   * @userPassword - user password payload.
   * @repeatUserPassword - user repeat password payload.
   */
  e.preventDefault();
  fetch("http://localhost:5000/auth/signup", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: userId,
      userPassword: userPassword,
      repeatUserPassword: repeatUserPassword,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      const resStatus: string = res.Response.status;
      let resError: string = res.Response?.error?.name;
      // Check if server responded
      resError = (typeof resError === "string") ? resError : "ServerIsDownError";
      let resMessage;
      switch (resStatus) {
        case "SUCCESS":
          resMessage = "Registration completed.";
          addNotificationStyle({resStatus})
          addNotification({resMessage});
          // Automatically log user in
          authLogin(e, userId, userPassword);
          break;
        case "TAKEN":
          resMessage = "Username is already taken.";
          addNotificationStyle({resStatus});
          addNotification({resMessage});
          window.location.href = "/auth/signup";
          break;
        case "FAILED":
          resMessage = serverErrors.clientErrorMap[resError];
          addNotificationStyle({resStatus});
          addNotification({resMessage});
          window.location.href = "/auth/signup";
          break;
      }
    });
}

export function authLogin(
  e: React.FormEvent<HTMLFormElement>,
  userId: string,
  userPassword: string
): void {
  /**
   * Login handler for user authentication.
   * @e - form event instance.
   * @userId - username payload.
   * @userPassword - user password payload.
   */
  e.preventDefault();
  fetch("http://localhost:5000/auth/login", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: userId,
      userPassword: userPassword,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      const resStatus: string = res.Response.status;
      let resError: string = res.Response?.error?.name;
      // Check if server responded
      resError = (typeof resError === "string") ? resError : "ServerIsDownError";
      let resMessage;
      switch (resStatus) {
        case "SUCCESS":
          resMessage = "Login successfully";
          addNotificationStyle({resStatus});
          addNotification({resMessage});
          // Redirect to homepage
          window.location.href = "/";
          break;
        case "FAILED":
          resMessage = serverErrors.clientErrorMap[resError];
          addNotificationStyle({resStatus});
          addNotification({resMessage});
          window.location.href = "/auth/login";
          break;
      }
    });
}

export function authLogout(e: React.MouseEvent<HTMLDivElement>): void {
  /**
   * Logout handler for user authentication.
   * @e - mouse event instance.
   */
  e.preventDefault();
  fetch("http://localhost:5000/auth/logout", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      const resStatus: string = res.Response.status;
      if (resStatus === "SUCCESS") {
        // Update notification
        const resMessage = "You've successfuly logged out";
        addNotificationStyle({resStatus});
        addNotification({ resMessage });
        // Redirect to login page
        window.location.href = "/auth/login";
      }
    });
}

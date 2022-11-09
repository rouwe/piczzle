import React from "react";

type NotificationHandlerType = {
  notificationStorage: string | null;
  setNotificationHeader: React.Dispatch<React.SetStateAction<string>>;
  setNotificationBody: React.Dispatch<React.SetStateAction<string>>;
};

type StatusColorsType = {
  [key: string]: string;
};

type AddNotificationType = {
  resMessage: string;
};

export function notificationHandler({
  notificationStorage,
  setNotificationHeader,
  setNotificationBody,
}: NotificationHandlerType): void {
  /**
   * Handler for notification.
   * @notificationStorage - the result of checking the local storage for notificationObj entry.
   * @setNotificationHeader - function to update notification header.
   * @setNotificationBody - function to update notification body.
   */
  // Use data from local storage
  if (notificationStorage) {
    // Process json string
    const { header, body }: { header: string; body: string } =
      JSON.parse(notificationStorage);
    setNotificationHeader(header);
    setNotificationBody(body);
    // Get Element
    const notificationElement: HTMLDivElement | null =
      document.querySelector("#notification");
    // Display element
    if (notificationElement) {
      notificationElement.style.display = "grid";
      const clearNotification = setTimeout(() => {
        // Hide Element
        notificationElement.style.display = "none";
        // Remove local storage entry
        localStorage.removeItem("notificationStyleObj")
        localStorage.removeItem("notificationObj");
        clearTimeout(clearNotification);
      }, 4000);
    }
  }
}

export function addNotification({ resMessage }: AddNotificationType): void {
  /**
   * Add notification item in local storage.
   * @resStatus - notification header.
   * @ - notification body.
  */
  const notificationKey = "notificationObj";
  const notification = JSON.stringify({
    body: resMessage,
  });
  localStorage.setItem(notificationKey, notification);
}

export function addNotificationStyle({resStatus}: {resStatus: string}) {
  /**
   * Add notification style in local storage.
   */
  const statusColors: StatusColorsType = {
    SUCCESS: "green",
    TAKEN: "orange",
    FAILED: "red",
  };
  // If notification and style doesn't exist in local storage
  const statusColor = statusColors[resStatus];

  const notificationStyles: React.CSSProperties = {
    borderColor: statusColor,
    color: statusColor,
  };

  const notificationIconStyles: React.CSSProperties = {
    borderColor: statusColor,
  };

  const notificationIconPathStyles: React.CSSProperties = {
    stroke: statusColor,
  };

  const storageNotificationStyles: string = JSON.stringify({
    notificationStyles: notificationStyles,
    notificationIconStyles: notificationIconStyles,
    notificationIconPathStyles: notificationIconPathStyles,
  });
  localStorage.setItem("notificationStyleObj", storageNotificationStyles);
}

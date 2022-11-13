import React from "react";
import "../../scss/pages/user/SettingsUpload.scss";
import {
  addNotification,
  addNotificationStyle,
} from "../../ts/notificationHandler";
import * as serverErrors from "../../utils/errors";

const AddImageIcon = () => (
  <svg
    width="96"
    height="96"
    viewBox="0 0 96 96"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M76 40C74.9391 40 73.9217 40.4214 73.1716 41.1716C72.4214 41.9217 72 42.9391 72 44V57.52L66.08 51.6C63.9897 49.5262 61.1645 48.3625 58.22 48.3625C55.2755 48.3625 52.4503 49.5262 50.36 51.6L47.56 54.44L37.64 44.48C35.5497 42.4062 32.7245 41.2425 29.78 41.2425C26.8355 41.2425 24.0103 42.4062 21.92 44.48L16 50.44V28C16 26.9391 16.4214 25.9217 17.1716 25.1716C17.9217 24.4214 18.9391 24 20 24H52C53.0609 24 54.0783 23.5786 54.8284 22.8284C55.5786 22.0783 56 21.0609 56 20C56 18.9391 55.5786 17.9217 54.8284 17.1716C54.0783 16.4214 53.0609 16 52 16H20C16.8174 16 13.7652 17.2643 11.5147 19.5147C9.26428 21.7652 8 24.8174 8 28V76.88C8.01054 79.826 9.18549 82.6483 11.2686 84.7314C13.3517 86.8145 16.174 87.9895 19.12 88H68.88C69.9639 87.9913 71.0412 87.8298 72.08 87.52V87.52C74.3897 86.8721 76.4232 85.4844 77.8683 83.5696C79.3134 81.6549 80.0903 79.3189 80.08 76.92V44C80.0801 43.4679 79.9741 42.9412 79.7681 42.4506C79.562 41.96 79.2602 41.5154 78.8803 41.1429C78.5003 40.7704 78.0499 40.4775 77.5553 40.2812C77.0607 40.085 76.532 39.9894 76 40ZM20 80C18.9391 80 17.9217 79.5786 17.1716 78.8284C16.4214 78.0783 16 77.0609 16 76V61.72L27.56 50.16C28.1446 49.5787 28.9355 49.2523 29.76 49.2523C30.5845 49.2523 31.3754 49.5787 31.96 50.16L61.84 80H20ZM72 76C71.9743 76.7745 71.7242 77.525 71.28 78.16L53.2 60L56.04 57.2C56.3268 56.9073 56.6691 56.6748 57.0468 56.5161C57.4246 56.3573 57.8302 56.2756 58.24 56.2756C58.6498 56.2756 59.0554 56.3573 59.4332 56.5161C59.8109 56.6748 60.1532 56.9073 60.44 57.2L72 68.84V76ZM84 16H80V12C80 10.9391 79.5786 9.92172 78.8284 9.17157C78.0783 8.42143 77.0609 8 76 8C74.9391 8 73.9217 8.42143 73.1716 9.17157C72.4214 9.92172 72 10.9391 72 12V16H68C66.9391 16 65.9217 16.4214 65.1716 17.1716C64.4214 17.9217 64 18.9391 64 20C64 21.0609 64.4214 22.0783 65.1716 22.8284C65.9217 23.5786 66.9391 24 68 24H72V28C72 29.0609 72.4214 30.0783 73.1716 30.8284C73.9217 31.5786 74.9391 32 76 32C77.0609 32 78.0783 31.5786 78.8284 30.8284C79.5786 30.0783 80 29.0609 80 28V24H84C85.0609 24 86.0783 23.5786 86.8284 22.8284C87.5786 22.0783 88 21.0609 88 20C88 18.9391 87.5786 17.9217 86.8284 17.1716C86.0783 16.4214 85.0609 16 84 16V16Z"
      fill="#0A0900"
      fillOpacity="0.25"
    />
  </svg>
);

function SettingsUpload() {
  const OpenFileBrowser = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Display file browser
    const uploadInput = document.querySelector(
      `#upload-image-input`
    ) as HTMLInputElement;
    if (uploadInput) uploadInput.click();
  };

  const uploadFile = (e: React.ChangeEvent) => {
    // Submit form
    const form = document.querySelector(".settings__upload") as HTMLFormElement;
    const formData = new FormData(form) as FormData;
    const options: RequestInit = {
      method: "POST",
      credentials: "include",
      body: formData,
    };
    fetch("http://localhost:5000/upload", options)
      .then((res) => res.json())
      .then((res) => {
        const resStatus: string = res.Response.status;
        let resError: string = res.Response?.error?.name;
        // Check if server responded
        resError =
          typeof resError === "string" ? resError : "ServerIsDownError";
        let resMessage;
        switch (resStatus) {
          case "SUCCESS":
            resMessage = "Image has been uploaded";
            addNotificationStyle({ resStatus });
            addNotification({ resMessage });
            window.location.href = "/";
            break;
          case "FAILED":
            resMessage = serverErrors.clientErrorMap[resError];
            addNotificationStyle({ resStatus });
            addNotification({ resMessage });
            window.location.href = "/";
            break;
        }
      });
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="settings__upload"
      action="http://localhost:5000/upload"
      method="POST"
      encType="multipart/form-data"
    >
      <div className="settings__upload__add-image">
        <AddImageIcon />
        <span className="settings__upload__add-image__text">Add image</span>
      </div>
      <div className="settings__upload__add-cta">
        <button
          className="cta cta-add-image"
          type="button"
          onClick={OpenFileBrowser}
        >
          Upload
        </button>
      </div>
      <input
        onChange={uploadFile}
        className="settings__upload__file-input"
        type="file"
        id="upload-image-input"
        name="piczzleSource"
      />
      <input id="uploadButton" style={{ display: "none" }} type="submit" />
    </form>
  );
}

export default SettingsUpload;

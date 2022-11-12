import React, { useState, useEffect } from "react";
import {
  fetchUserSavedRecord,
  fetchSavedPiczzles,
} from "../../ts/settingsUtil";
import "../../scss/pages/user/SettingsSaved.scss";

const LoadMoreIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.99999 1.66666C5.41666 1.66666 1.66666 5.41666 1.66666 9.99999C1.66666 14.5833 5.41666 18.3333 9.99999 18.3333C14.5833 18.3333 18.3333 14.5833 18.3333 9.99999C18.3333 5.41666 14.5833 1.66666 9.99999 1.66666ZM13.0833 10.5833L10.5833 13.0833C10.5 13.1667 10.4167 13.25 10.3333 13.25C10.1667 13.3333 9.91666 13.3333 9.66666 13.25C9.58332 13.25 9.49999 13.1667 9.41666 13.0833L6.91666 10.5833C6.58332 10.25 6.58332 9.74999 6.91666 9.41666C7.24999 9.08332 7.74999 9.08332 8.08332 9.41666L9.16666 10.5V7.49999C9.16666 6.99999 9.49999 6.66666 9.99999 6.66666C10.5 6.66666 10.8333 6.99999 10.8333 7.49999V10.5L11.9167 9.41666C12.25 9.08332 12.75 9.08332 13.0833 9.41666C13.4167 9.74999 13.4167 10.25 13.0833 10.5833Z"
      fill="#0A0900"
      fillOpacity="0.75"
    />
  </svg>
);

function SettingsSaved() {
  // User saved piczzles url
  const [savedPiczzlesUrlArr, setSavedPiczzlesUrlArr] = useState<string[]>([]);
  const [savedPiczzles, setSavedPicczles] = useState<JSX.Element[]>([]);

  useEffect(() => {
    // Fetch the user saved records
    const fetchSavedDataPromise = fetchUserSavedRecord() as Promise<string[]>;
    fetchSavedPiczzles(fetchSavedDataPromise, setSavedPiczzlesUrlArr);
  }, []);

  useEffect(() => {
    // const gallery = document.querySelector(".settings__saved__gallery");
    const galleryItemArr = savedPiczzlesUrlArr.map((url, idx) => {
      return (
        <img
          key={`gItem${idx}`}
          className="settings__saved__gallery__item"
          src={url}
          alt="Piczzle"
        />
      );
    });
    setSavedPicczles(galleryItemArr);
  }, [savedPiczzlesUrlArr]);

  const PiczzlesList = (): JSX.Element => <>{savedPiczzles}</>;

  return (
    <div className="settings__saved">
      <div className="settings__saved__gallery">
        <PiczzlesList />
      </div>
      {savedPiczzlesUrlArr.length === 0 && (
        <div className="no-recent-pizzle-warning">
          <span className="no-recent-pizzle-warning__message">
            Saved piczzles not found.
          </span>
        </div>
      )}
      <div className="settings__saved__load-more">
        <LoadMoreIcon />
      </div>
    </div>
  );
}

export default SettingsSaved;

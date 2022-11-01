import React from "react";
import { useState } from "react";
import SettingsUpload from "./SettingsUpload";
import SettingsSaved from "./SettingsSaved";
import SettingsDifficulty from "./SettingsDifficulty";
import "../../scss/pages/user/HomeSettings.scss";

function HomeSettings() {
  const [openTab, setOpenTab] = useState("upload");

  return (
    <>
      <div className="user__settings__tab">
        <div className="user__settings__tab__item">
          <span className="user__settings__tab__item__text active-tab">
            Upload
          </span>
        </div>
        <div className="user__settings__tab__item">
          <span className="user__settings__tab__item__text">Saved</span>
        </div>
      </div>
      <div className="user__settings__body">
        {openTab === "upload" ? (
          <SettingsUpload />
        ) : openTab === "saved" ? (
          <SettingsSaved />
        ) : (
          <></>
        )}
      </div>
      <div className="user__settings__difficulty">
        <SettingsDifficulty />
      </div>
    </>
  );
}

export default HomeSettings;

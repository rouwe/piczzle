import React, { useState } from "react";
import SettingsUpload from "./SettingsUpload";
import SettingsSaved from "./SettingsSaved";
import SettingsDifficulty from "./SettingsDifficulty";
import "../../scss/pages/user/HomeSettings.scss";

function HomeSettings() {
  const [tabToOpen, setTabToOpen] = useState("upload");

  const settingsTab = (tab: string): JSX.Element => {
    // Render settings tab
    return tab === "upload" ? <SettingsUpload /> : <SettingsSaved />;
  };

  const changeTab = (e: React.MouseEvent): void => {
    const settingsTabItemArr = document.querySelectorAll(
      ".user__settings__tab__item__text"
    ) as NodeListOf<HTMLSpanElement>;
    // Change active tab
    settingsTabItemArr.forEach((tab) => {
      tab.classList.toggle("active-tab");
    });
    // Change tab to open
    if (tabToOpen === "upload") setTabToOpen("saved");
    else setTabToOpen("upload");
  };

  return (
    <>
      <div className="user__settings__tab">
        <div
          onClick={(e) => changeTab(e)}
          className="user__settings__tab__item"
        >
          <span className="user__settings__tab__item__text active-tab">
            Upload
          </span>
        </div>
        <div
          onClick={(e) => changeTab(e)}
          className="user__settings__tab__item"
        >
          <span className="user__settings__tab__item__text">Saved</span>
        </div>
      </div>
      <div className="user__settings__body">{settingsTab(tabToOpen)}</div>
      <div className="user__settings__difficulty">
        <SettingsDifficulty />
      </div>
    </>
  );
}

export default HomeSettings;

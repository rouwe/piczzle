import React from "react";
import "../../scss/pages/user/SettingsDifficulty.scss";

function SettingsDifficulty() {
  function difficultyHandler() {
    return;
  }

  return (
    <>
      <div className="settings__difficulty__heading">
        <span className="settings__difficulty__heading__text">Difficulty</span>
      </div>
      <div className="settings__difficulty__range">
        <input
          className="settings__difficulty__range__selector"
          type="range"
          min="2"
          max="9"
          onChange={difficultyHandler}
        />
        <div className="settings__difficulty__range__label">
          <datalist className="settings__difficulty__range__label__datalist">
            <span className="settings__difficulty__range__label__datalist__item">
              2
            </span>
            <span className="settings__difficulty__range__label__datalist__item">
              3
            </span>
            <span className="settings__difficulty__range__label__datalist__item">
              4
            </span>
            <span className="settings__difficulty__range__label__datalist__item">
              5
            </span>
            <span className="settings__difficulty__range__label__datalist__item">
              6
            </span>
            <span className="settings__difficulty__range__label__datalist__item">
              7
            </span>
            <span className="settings__difficulty__range__label__datalist__item">
              8
            </span>
            <span className="settings__difficulty__range__label__datalist__item">
              9
            </span>
          </datalist>
        </div>
      </div>
      <p className="settings__difficulty__description">Easy</p>
    </>
  );
}

export default SettingsDifficulty;

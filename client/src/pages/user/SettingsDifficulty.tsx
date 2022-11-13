import React, { useContext } from "react";
import "../../scss/pages/user/SettingsDifficulty.scss";
import { SettingsContext } from "../../context/SettingsContext";

function SettingsDifficulty() {
  const { updateGridInfo } = useContext(SettingsContext);

  const difficultyHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    /**
     * Updates grid info property of piczzle configuration
     * @e - on change event
     */
    const rangeTarget = e.currentTarget;
    const rangeTargetValue = Number(rangeTarget.value);
    const newGridInfo = {
      gridColumns: rangeTargetValue,
      gridRows: rangeTargetValue,
      gaps: 0.25,
    };
    // Set delay of execution if user where to spam range input
    setTimeout(() => {
      if (updateGridInfo) updateGridInfo(newGridInfo);
    }, 50);
    return;
  };

  return (
    <>
      <div className="settings__difficulty__heading">
        <span className="settings__difficulty__heading__text">Difficulty</span>
      </div>
      <div className="settings__difficulty__range">
        <input
          onChange={difficultyHandler}
          className="settings__difficulty__range__selector"
          type="range"
          defaultValue={4}
          min="2"
          max="9"
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

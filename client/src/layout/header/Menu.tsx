import React from "react";
import { displayNone, displayFlex } from "../../utils/stylesSnippet";
import { UserAuthenticationType } from "../../shared/types/types";

function Menu({ loggedIn }: UserAuthenticationType) {
  const MenuOpen = () => (
    <svg
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5.5"
        y="6.875"
        width="22"
        height="6.875"
        rx="1.375"
        stroke="#333333"
        strokeWidth="2.75"
        strokeLinejoin="round"
      />
      <rect
        x="5.5"
        y="19.25"
        width="22"
        height="6.875"
        rx="1.375"
        stroke="#333333"
        strokeWidth="2.75"
        strokeLinejoin="round"
      />
    </svg>
  );

  const MenuClose = () => (
    <svg
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.75 8.25L8.25 24.75"
        stroke="#333333"
        strokeWidth="2.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.25 8.25L24.75 24.75"
        stroke="#333333"
        strokeWidth="2.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const Logout = () => (
    <svg
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1220_3684)">
        <path
          d="M5.5 24.75H8.25V27.5H24.75V5.5H8.25V8.25H5.5V4.125C5.5 3.76033 5.64487 3.41059 5.90273 3.15273C6.16059 2.89487 6.51033 2.75 6.875 2.75H26.125C26.4897 2.75 26.8394 2.89487 27.0973 3.15273C27.3551 3.41059 27.5 3.76033 27.5 4.125V28.875C27.5 29.2397 27.3551 29.5894 27.0973 29.8473C26.8394 30.1051 26.4897 30.25 26.125 30.25H6.875C6.51033 30.25 6.16059 30.1051 5.90273 29.8473C5.64487 29.5894 5.5 29.2397 5.5 28.875V24.75ZM8.25 15.125H17.875V17.875H8.25V22L1.375 16.5L8.25 11V15.125Z"
          fill="#333333"
        />
      </g>
      <defs>
        <clipPath id="clip0_1220_3684">
          <rect width="33" height="33" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  return (
    <>
      <div style={loggedIn ? displayNone : {}} className="header__menu__open">
        <MenuOpen />
      </div>
      <div className="header__menu__close">
        <MenuClose />
      </div>
      <div style={loggedIn ? displayFlex : {}} className="header__menu__user">
        <Logout />
      </div>
    </>
  );
}

export default Menu;

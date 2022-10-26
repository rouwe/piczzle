import React from "react";
import "../../scss/pages/guest/GuestHowTo.scss";

const UploadIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.3875 10.1313L14.25 7.25627V19.2438C14.25 19.5753 14.3817 19.8932 14.6161 20.1276C14.8505 20.3621 15.1685 20.4938 15.5 20.4938C15.8315 20.4938 16.1495 20.3621 16.3839 20.1276C16.6183 19.8932 16.75 19.5753 16.75 19.2438V7.25627L19.6125 10.1313C19.7287 10.2484 19.867 10.3414 20.0193 10.4049C20.1716 10.4683 20.335 10.501 20.5 10.501C20.665 10.501 20.8284 10.4683 20.9807 10.4049C21.133 10.3414 21.2713 10.2484 21.3875 10.1313C21.5047 10.0151 21.5977 9.87681 21.6611 9.72449C21.7246 9.57216 21.7572 9.40878 21.7572 9.24377C21.7572 9.07875 21.7246 8.91537 21.6611 8.76305C21.5977 8.61072 21.5047 8.47247 21.3875 8.35627L16.3875 3.35627C16.2686 3.24247 16.1284 3.15326 15.975 3.09377C15.6707 2.96874 15.3293 2.96874 15.025 3.09377C14.8716 3.15326 14.7314 3.24247 14.6125 3.35627L9.6125 8.35627C9.49595 8.47282 9.4035 8.61118 9.34043 8.76346C9.27735 8.91573 9.24489 9.07894 9.24489 9.24377C9.24489 9.40859 9.27735 9.5718 9.34043 9.72408C9.4035 9.87636 9.49595 10.0147 9.6125 10.1313C9.72905 10.2478 9.86741 10.3403 10.0197 10.4033C10.172 10.4664 10.3352 10.4989 10.5 10.4989C10.6648 10.4989 10.828 10.4664 10.9803 10.4033C11.1326 10.3403 11.271 10.2478 11.3875 10.1313ZM26.75 17.9938C26.4185 17.9938 26.1005 18.1255 25.8661 18.3599C25.6317 18.5943 25.5 18.9122 25.5 19.2438V24.2438C25.5 24.5753 25.3683 24.8932 25.1339 25.1277C24.8995 25.3621 24.5815 25.4938 24.25 25.4938H6.75C6.41848 25.4938 6.10054 25.3621 5.86612 25.1277C5.6317 24.8932 5.5 24.5753 5.5 24.2438V19.2438C5.5 18.9122 5.3683 18.5943 5.13388 18.3599C4.89946 18.1255 4.58152 17.9938 4.25 17.9938C3.91848 17.9938 3.60054 18.1255 3.36612 18.3599C3.1317 18.5943 3 18.9122 3 19.2438V24.2438C3 25.2383 3.39509 26.1922 4.09835 26.8954C4.80161 27.5987 5.75544 27.9938 6.75 27.9938H24.25C25.2446 27.9938 26.1984 27.5987 26.9017 26.8954C27.6049 26.1922 28 25.2383 28 24.2438V19.2438C28 18.9122 27.8683 18.5943 27.6339 18.3599C27.3995 18.1255 27.0815 17.9938 26.75 17.9938Z"
      fill="url(#paint0_linear_525_3880)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_525_3880"
        x1="15.5"
        y1="3"
        x2="15.5"
        y2="27.9938"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFF400" />
        <stop offset="1" stopColor="#FF7400" />
      </linearGradient>
    </defs>
  </svg>
);

const FilterIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.75 7.5C3.05964 7.5 2.5 8.05964 2.5 8.75C2.5 9.44036 3.05964 10 3.75 10V7.5ZM3.75 20C3.05964 20 2.5 20.5596 2.5 21.25C2.5 21.9404 3.05964 22.5 3.75 22.5V20ZM11.25 22.5C11.9404 22.5 12.5 21.9404 12.5 21.25C12.5 20.5596 11.9404 20 11.25 20V22.5ZM26.25 22.5C26.9404 22.5 27.5 21.9404 27.5 21.25C27.5 20.5596 26.9404 20 26.25 20V22.5ZM18.75 7.5C18.0596 7.5 17.5 8.05964 17.5 8.75C17.5 9.44036 18.0596 10 18.75 10V7.5ZM26.25 10C26.9404 10 27.5 9.44036 27.5 8.75C27.5 8.05964 26.9404 7.5 26.25 7.5V10ZM3.75 10H7.5V7.5H3.75V10ZM3.75 22.5H11.25V20H3.75V22.5ZM22.5 22.5H26.25V20H22.5V22.5ZM18.75 10H26.25V7.5H18.75V10ZM21.25 21.25C21.25 22.6307 20.1307 23.75 18.75 23.75V26.25C21.5114 26.25 23.75 24.0114 23.75 21.25H21.25ZM18.75 23.75C17.3693 23.75 16.25 22.6307 16.25 21.25H13.75C13.75 24.0114 15.9886 26.25 18.75 26.25V23.75ZM16.25 21.25C16.25 19.8693 17.3693 18.75 18.75 18.75V16.25C15.9886 16.25 13.75 18.4886 13.75 21.25H16.25ZM18.75 18.75C20.1307 18.75 21.25 19.8693 21.25 21.25H23.75C23.75 18.4886 21.5114 16.25 18.75 16.25V18.75ZM13.75 8.75C13.75 10.1307 12.6307 11.25 11.25 11.25V13.75C14.0114 13.75 16.25 11.5114 16.25 8.75H13.75ZM11.25 11.25C9.86929 11.25 8.75 10.1307 8.75 8.75H6.25C6.25 11.5114 8.48858 13.75 11.25 13.75V11.25ZM8.75 8.75C8.75 7.36929 9.86929 6.25 11.25 6.25V3.75C8.48858 3.75 6.25 5.98858 6.25 8.75H8.75ZM11.25 6.25C12.6307 6.25 13.75 7.36929 13.75 8.75H16.25C16.25 5.98858 14.0114 3.75 11.25 3.75V6.25Z"
      fill="url(#paint0_linear_525_3886)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_525_3886"
        x1="15"
        y1="5"
        x2="15"
        y2="25"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFF400" />
        <stop offset="1" stopColor="#FF7400" />
      </linearGradient>
    </defs>
  </svg>
);

const FlagIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_525_3893)">
      <path
        d="M6.25 20V27.5H3.75V3.75H15.4775C15.7096 3.75012 15.937 3.81485 16.1344 3.93694C16.3318 4.05903 16.4913 4.23365 16.595 4.44125L17.5 6.25H25C25.3315 6.25 25.6495 6.3817 25.8839 6.61612C26.1183 6.85054 26.25 7.16848 26.25 7.5V21.25C26.25 21.5815 26.1183 21.8995 25.8839 22.1339C25.6495 22.3683 25.3315 22.5 25 22.5H17.0225C16.7904 22.4999 16.563 22.4351 16.3656 22.3131C16.1682 22.191 16.0087 22.0164 15.905 21.8088L15 20H6.25ZM6.25 6.25V17.5H16.545L17.795 20H23.75V8.75H15.955L14.705 6.25H6.25Z"
        fill="url(#paint0_linear_525_3893)"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_525_3893"
        x1="15"
        y1="3.75"
        x2="15"
        y2="27.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFF400" />
        <stop offset="1" stopColor="#FF7400" />
      </linearGradient>
      <clipPath id="clip0_525_3893">
        <rect width="30" height="30" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

function GuestHowTo() {
  return (
    <>
      <h2 className="guest__howto__heading">How to Play</h2>
      <div className="guest__howto__steps">
        <div className="guest__howto__steps__section">
          <div className="guest__howto__steps__section__heading">
            <span className="guest__howto__steps__section__heading__icons">
              <UploadIcon />
            </span>
            <h3 className="guest__howto__steps__section__heading__text">
              Upload Image
            </h3>
          </div>
          <p className="guest__howto__steps__section__text">
            First, log in to your account or create one if you don't have any.
            Once you're done, choose and upload the image you want.
          </p>
        </div>
        <div className="guest__howto__steps__section">
          <div className="guest__howto__steps__section__heading">
            <span className="guest__howto__steps__section__heading__icons">
              <FilterIcon />
            </span>
            <h3 className="guest__howto__steps__section__heading__text">
              Set Difficulty
            </h3>
          </div>
          <p className="guest__howto__steps__section__text">
            The next step is to select the difficulty. The higher it gets, the
            more challenging it will be.
          </p>
        </div>
        <div className="guest__howto__steps__section">
          <div className="guest__howto__steps__section__heading">
            <span className="guest__howto__steps__section__heading__icons">
              <FlagIcon />
            </span>
            <h3 className="guest__howto__steps__section__heading__text">
              Start Playing
            </h3>
          </div>
          <p className="guest__howto__steps__section__text">
            Once all of the previous steps are done, you can start solving the
            puzzle.
          </p>
        </div>
      </div>
    </>
  );
}

export default GuestHowTo;

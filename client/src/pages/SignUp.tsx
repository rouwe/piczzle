import React, { useState } from "react";
import CTA from "../shared/components/CTA";
import AuthIcons from "../shared/components/AuthIcons";
import { authSignup } from "../ts/authController";

function SignUp() {
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [repeatUserPassword, setRepeatUserPassword] = useState("");
  const MIN_LENGTH = 8;
  const MAX_LENGTH = 64;
  const signupHandler = (e: React.FormEvent<HTMLFormElement>) => {
    authSignup(e, userId, userPassword, repeatUserPassword);
  };

  return (
    <main className="login form-layout auth-form">
      <div className="pages-header">
        <h1 className="pages-heading">Sign Up</h1>
        <span className="pages-header__sub-heading">
          Get ready to be puzzled by your own photo.
        </span>
      </div>
      <div className="auth-form__auth-options">
        <div className="auth-form__auth-options__option">
          <span className="auth-form__auth-options__option__icon">
            <AuthIcons authType="google" />
          </span>
          <CTA
            className="auth-form__auth-options__option__button"
            type="button"
            innerText="Continue with Google"
          />
        </div>
      </div>
      <div className="auth-form__option-divider">
        <hr className="auth-form__option-divider__rule" />
        <span className="auth-form__option-divider__text">or</span>
        <hr className="auth-form__option-divider__rule" />
      </div>
      <form
        onSubmit={signupHandler}
        className="form-layout__form"
        action="/"
        method="POST"
      >
        <div className="form-layout__form__input-box">
          <label
            className="form-layout__form__input-box__label"
            htmlFor="signupUsernameEmail"
          >
            Username or email
          </label>
          <input
            onChange={(e) => setUserId(e.target.value)}
            className="form-layout__form__input-box__input"
            id="signupUsernameEmail"
            type="text"
            name="userId"
            minLength={MIN_LENGTH}
            maxLength={MAX_LENGTH}
            placeholder="Your username or email"
            required
          />
        </div>
        <div className="form-layout__form__input-box">
          <label
            className="form-layout__form__input-box__label"
            htmlFor="signupPassword"
          >
            Password
          </label>
          <input
            onChange={(e) => setUserPassword(e.target.value)}
            className="form-layout__form__input-box__input"
            id="signupPassword"
            type="password"
            name="userPassword"
            minLength={MIN_LENGTH}
            maxLength={MAX_LENGTH}
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="form-layout__form__input-box">
          <label
            className="form-layout__form__input-box__label"
            htmlFor="repeatSignupPassword"
          >
            Repeat password
          </label>
          <input
            onChange={(e) => setRepeatUserPassword(e.target.value)}
            className="form-layout__form__input-box__input"
            id="repeatSignupPassword"
            type="password"
            name="repeatUserPassword"
            minLength={MIN_LENGTH}
            maxLength={MAX_LENGTH}
            placeholder="Repeat your password"
            required
          />
        </div>
        <div className="form-layout__form__submit">
          <CTA
            className="form-layout__form__submit__button"
            type="button"
            innerText="Sign Up"
            isSubmit={true}
          />
        </div>
      </form>
    </main>
  );
}

export default SignUp;

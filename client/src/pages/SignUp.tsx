import React from "react";
import CTA from "../shared/components/CTA";
import AuthIcons from "../shared/components/AuthIcons";

function SignUp() {
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
      <form className="form-layout__form" action="/login" method="POST">
        <div className="form-layout__form__input-box">
          <label
            className="form-layout__form__input-box__label"
            htmlFor="signupUsernameEmail"
          >
            Username or email
          </label>
          <input
            className="form-layout__form__input-box__input"
            id="signupUsernameEmail"
            type="text"
            name="userId"
            placeholder="Your username or email"
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
            className="form-layout__form__input-box__input"
            id="signupPassword"
            type="password"
            name="userPassword"
            placeholder="Enter your password"
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
            className="form-layout__form__input-box__input"
            id="repeatSignupPassword"
            type="password"
            name="repeatUserPassword"
            placeholder="Repeat your password"
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

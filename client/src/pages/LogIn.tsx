import React, { useState } from "react";
import CTA from "../shared/components/CTA";
import AuthIcons from "../shared/components/AuthIcons";

function LogIn() {
  const [authLoginResponse, setAuthLoginResponse] = useState("");
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const MIN_LENGTH = 8;
  const MAX_LENGTH = 64;

  function authLogin(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    fetch("http://localhost:5000/auth/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
        userPassword: userPassword,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  }

  return (
    <main className="login form-layout auth-form">
      <h1 className="pages-heading">Welcome back</h1>
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
        onSubmit={authLogin}
        className="form-layout__form"
        action="/"
        method="POST"
      >
        <div className="form-layout__form__input-box">
          <label
            className="form-layout__form__input-box__label"
            htmlFor="loginUsernameEmail"
          >
            Username or email
          </label>
          <input
            onChange={(e) => setUserId(e.target.value)}
            className="form-layout__form__input-box__input"
            id="loginUsernameEmail"
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
            htmlFor="loginPassword"
          >
            Password
          </label>
          <input
            onChange={(e) => setUserPassword(e.target.value)}
            className="form-layout__form__input-box__input"
            id="loginPassword"
            type="password"
            name="userPassword"
            minLength={MIN_LENGTH}
            maxLength={MAX_LENGTH}
            placeholder="Enter your password"
            required
          />
        </div>

        <div className="form-layout__form__submit">
          <CTA
            className="form-layout__form__submit__button"
            type="button"
            innerText="Log In"
            isSubmit={true}
          />
        </div>
      </form>
    </main>
  );
}

export default LogIn;

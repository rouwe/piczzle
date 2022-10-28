import React from "react";
import CTA from "../shared/components/CTA";

const SendMessageIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.5 14C20.2348 14 19.9804 14.1053 19.7929 14.2929C19.6054 14.4804 19.5 14.7348 19.5 15V19C19.5 19.2652 19.3946 19.5196 19.2071 19.7071C19.0196 19.8946 18.7652 20 18.5 20H4.5C4.23478 20 3.98043 19.8946 3.79289 19.7071C3.60536 19.5196 3.5 19.2652 3.5 19V9.40999L9.38 15.3C9.9425 15.8618 10.705 16.1773 11.5 16.1773C12.295 16.1773 13.0575 15.8618 13.62 15.3L15.26 13.66C15.4483 13.4717 15.5541 13.2163 15.5541 12.95C15.5541 12.6837 15.4483 12.4283 15.26 12.24C15.0717 12.0517 14.8163 11.9459 14.55 11.9459C14.2837 11.9459 14.0283 12.0517 13.84 12.24L12.2 13.88C12.0131 14.0632 11.7618 14.1658 11.5 14.1658C11.2382 14.1658 10.9869 14.0632 10.8 13.88L4.91 7.99999H11.5C11.7652 7.99999 12.0196 7.89463 12.2071 7.70709C12.3946 7.51956 12.5 7.2652 12.5 6.99999C12.5 6.73477 12.3946 6.48042 12.2071 6.29288C12.0196 6.10535 11.7652 5.99999 11.5 5.99999H4.5C3.70435 5.99999 2.94129 6.31606 2.37868 6.87867C1.81607 7.44128 1.5 8.20434 1.5 8.99999V19C1.5 19.7956 1.81607 20.5587 2.37868 21.1213C2.94129 21.6839 3.70435 22 4.5 22H18.5C19.2956 22 20.0587 21.6839 20.6213 21.1213C21.1839 20.5587 21.5 19.7956 21.5 19V15C21.5 14.7348 21.3946 14.4804 21.2071 14.2929C21.0196 14.1053 20.7652 14 20.5 14ZM22.21 5.28999L19.21 2.28999C19.1149 2.19895 19.0028 2.12758 18.88 2.07999C18.6365 1.97997 18.3635 1.97997 18.12 2.07999C17.9972 2.12758 17.8851 2.19895 17.79 2.28999L14.79 5.28999C14.6017 5.47829 14.4959 5.73369 14.4959 5.99999C14.4959 6.26629 14.6017 6.52168 14.79 6.70999C14.9783 6.89829 15.2337 7.00408 15.5 7.00408C15.7663 7.00408 16.0217 6.89829 16.21 6.70999L17.5 5.40999V11C17.5 11.2652 17.6054 11.5196 17.7929 11.7071C17.9804 11.8946 18.2348 12 18.5 12C18.7652 12 19.0196 11.8946 19.2071 11.7071C19.3946 11.5196 19.5 11.2652 19.5 11V5.40999L20.79 6.70999C20.883 6.80372 20.9936 6.87811 21.1154 6.92888C21.2373 6.97965 21.368 7.00579 21.5 7.00579C21.632 7.00579 21.7627 6.97965 21.8846 6.92888C22.0064 6.87811 22.117 6.80372 22.21 6.70999C22.3037 6.61703 22.3781 6.50642 22.4289 6.38456C22.4797 6.26271 22.5058 6.132 22.5058 5.99999C22.5058 5.86798 22.4797 5.73727 22.4289 5.61541C22.3781 5.49355 22.3037 5.38295 22.21 5.28999Z"
      fill="#0A0900"
    />
  </svg>
);

function Contact() {
  return (
    <main className="contact form-layout">
      <h1 className="pages-heading">Let's have a chat</h1>
      <form className="form-layout__form" action="/" method="POST">
        <div className="form-layout__form__input-box">
          <label
            className="form-layout__form__input-box__label"
            htmlFor="contactFirstName"
          >
            First Name
          </label>
          <input
            className="form-layout__form__input-box__input"
            id="contactFirstName"
            type="text"
            name="firstName"
            placeholder="Your first name here"
          />
        </div>
        <div className="form-layout__form__input-box">
          <label
            className="form-layout__form__input-box__label"
            htmlFor="contactLastName"
          >
            Last Name
          </label>
          <input
            className="form-layout__form__input-box__input"
            id="contactLastName"
            type="text"
            name="lastName"
            placeholder="Your last name here"
          />
        </div>
        <div className="form-layout__form__input-box">
          <label
            className="form-layout__form__input-box__label"
            htmlFor="contactEmail"
          >
            Email
          </label>
          <input
            className="form-layout__form__input-box__input"
            id="contactEmail"
            type="email"
            name="email"
            placeholder="myname@email.com"
          />
        </div>
        <div className="form-layout__form__input-box">
          <label
            className="form-layout__form__input-box__label"
            htmlFor="contactMessage"
          >
            Message
          </label>
          <textarea
            className="form-layout__form__input-box__input"
            id="contactMessage"
            name="message"
            cols={30}
            rows={2}
            placeholder="Something you want to talk about..."
          ></textarea>
        </div>

        <div className="form-layout__form__submit">
          <span className="form-layout__form__submit__icon">
            <SendMessageIcon />
          </span>
          <CTA
            className="form-layout__form__submit__button"
            type="button"
            innerText="Send Message"
            isSubmit={true}
          />
        </div>
      </form>
    </main>
  );
}

export default Contact;

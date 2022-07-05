import "./styles.css";
import "react-glass-cards/dist/index.css";
import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import Lottie from "lottie-react";
import animationData from "../../assets/animations/paperPlane.json";

const Contact = () => {
  const [message, setMessage] = useState("");
  const style = {
    position: "absolute",
    top: "20px",
  };
  return (
    <>
      <div className='h-100 d-flex justify-content-center align-items-center min-vh-100'>
        <h1 className='page-heading'>
          <FormattedMessage id='letsChat' />
          {"!"}
        </h1>
        <Lottie
          animationData={animationData}
          // interactivity={interactivity}
          style={style}
          isStopped={false}
        />
      </div>
      <div className='container d-flex align-items-center justify-content-center'>
        <form className='contact-form'>
          <div class='form-row'>
            <div class='form-group col-md-6'>
              <label for='firstName'>
                <FormattedMessage id='firstName' />
              </label>
              <input
                type='text'
                class='form-control'
                id='firstName'
                placeholder='John'
              />
            </div>
            <div class='form-group col-md-6'>
              <label for='lastName'>
                <FormattedMessage id='lastName' />
              </label>
              <input
                type='text'
                class='form-control'
                id='lastName'
                placeholder='Wick'
              />
            </div>
          </div>
          <div class='form-group'>
            <label for='email'>Email</label>
            <input
              type='text'
              class='form-control'
              id='email'
              placeholder='myemailaddress@gmail.com'
            />
          </div>
          <div class='form-group'>
            <label for='message'>Message</label>
            <textarea
              rows={10}
              maxLength={500}
              type='text'
              class='form-control'
              id='message'
              placeholder='Type your message here....'
              onChange={(e) => setMessage(e.target.value)}
            />
            <small className='float-right'>{message.length}/500</small>
          </div>
          {/* <button type='submit' class='btn btn-primary'>
            Send
          </button> */}
          <a href='mailto:mohsinakbar0395@gmail.com'>Send Feedback</a>
        </form>
      </div>
    </>
  );
};

export default Contact;

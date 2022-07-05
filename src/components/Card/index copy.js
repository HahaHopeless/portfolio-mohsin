import "./styles.css";
import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import Lottie from "react-lottie";
import WarningAnimation from "../../assets/animations/warning.json";
import GradientButton from "../GradientButton";

const Card = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: WarningAnimation,
  };

  return (
    <>
      <div
        className='card container js-tilt'
        style={{
          backgroundImage: `url(${props.bgImage})`,
        }}
      >
        <h1 className='cardTitle card-header card-text'>{props.title}</h1>
        <div class='card-body'></div>
        <div
          className='card-footer'
          onClick={() =>
            !props.adult
              ? window.open(`${props.goToUrl}`, "_blank")
              : setIsModalVisible(true)
          }
        >
          <h3 className='card-footer-text card-text'>
            <FormattedMessage id='visitWebsite' />
          </h3>
        </div>
        {props.adult && (
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              backgroundColor: "#ff6348",
              borderRadius: "100%",
              width: "80px",
              height: "80px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span
              style={{
                color: "white",
                fontSize: "20px",
                fontWeight: 700,
                textAlign: "center",
                lineHeight: "15px",
              }}
            >
              18+ <br />
              <span
                style={{ fontSize: "10px", color: "white", fontWeight: 400 }}
              >
                {" "}
                Adults only
              </span>
            </span>
          </div>
        )}
      </div>
      {isModalVisible && (
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.8)",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 99999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "40vw",
              height: "40vh",
              backgroundColor: "white",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <div
              style={{
                top: "10px",
                right: "10px",
                cursor: "pointer",
                alignSelf: "flex-end",
                marginTop: "-5vh",
              }}
              onClick={() => {
                setIsModalVisible(false);
              }}
            >
              X
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {" "}
              <Lottie
                options={defaultOptions}
                height={100}
                width={200}
                isStopped={false}
                style={{
                  marginLeft: "-1vw",
                }}
              />
              <span>
                <span
                  style={{
                    fontSize: "32px",
                    fontWeight: 800,
                    color: "#ff6348",
                  }}
                >
                  Age Restriction
                </span>
                <br />
                <span>
                  You are about to open an age restricted app. Are you sure you
                  want to continue?
                </span>
              </span>
            </div>
            <br />
            <GradientButton
              text='I am 18+'
              onClick={() => {
                setIsModalVisible(false);
                window.open(`${props.goToUrl}`, "_blank");
              }}
              color='red'
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Card;

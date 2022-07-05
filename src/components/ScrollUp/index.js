import "./styles.css";
import React from "react";
import { FormattedMessage } from "react-intl";
import ReactAnime from "react-animejs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const ScrollUp = (props) => {
  const { Anime } = ReactAnime;
  return (
    <div className='container-fluid'>
      <div
        className='d-flex flex-column align-items-center justify-content-center fade-in'
        style={{ height: "90vh" }}
      >
        <Anime
          initial={[
            {
              targets: "#arrowUp",
              keyframes: [
                {
                  translateY: 0,
                  delay: 1300,
                  opacity: 0.5,
                },
                {
                  translateY: -20,
                  delay: 1300,
                  opacity: 0.8,
                },
                {
                  translateY: 0,
                  opacity: 0.5,
                },
              ],
              duration: 1500,
              easing: "easeOutElastic(1, 2)",
              loop: true,
            },
          ]}
        >
          <FontAwesomeIcon
            icon={faChevronUp}
            className='faIcon'
            id='arrowUp'
            opacity={0.5}
            style={{ marginBottom: "40px" }}
          />
        </Anime>
        <div style={{ textJustify: "inter-word" }}>
          <h1
            style={{
              fontWeight: "800",
              fontSize: "48px",
              marginBottom: "-10px",
              textShadow: "0px 0px 10px rgba(47,53,66,0.3)",
            }}
          >
            <FormattedMessage id='scroll' />
          </h1>
          <h1
            style={{
              fontWeight: "800",
              marginBottom: "-10px",
              textShadow: "0px 0px 10px rgba(47,53,66,0.3)",
            }}
          >
            <FormattedMessage id='toSee' />
          </h1>
          <h1
            style={{
              fontWeight: "800",
              fontSize: "48px",
              textShadow: "0px 0px 10px rgba(47,53,66,0.3)",
            }}
          >
            <FormattedMessage id='more' />
          </h1>
        </div>
        <Anime
          initial={[
            {
              targets: "#arrowDown",
              keyframes: [
                {
                  translateY: 0,
                  delay: 1300,
                  opacity: 0.5,
                },
                {
                  translateY: 20,
                  delay: 1300,
                  opacity: 0.8,
                },
                {
                  translateY: 0,
                  opacity: 0.5,
                },
              ],
              easing: "easeOutElastic(1, 2)",
              duration: 1500,
              loop: true,
            },
          ]}
        >
          <FontAwesomeIcon
            icon={faChevronDown}
            className='faIcon'
            id='arrowDown'
            opacity={0.5}
            style={{ marginTop: "40px" }}
          />
        </Anime>

        {/* <div
          style={{
            position: "absolute",
            right: "-4.5vw",
          }}
        >
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: animationData,
            }}
            height={400}
            width={400}
            isStopped={false}
            style={{ marginTop: "-10vh" }}
          />
        </div> */}
      </div>
    </div>
  );
};

export default ScrollUp;

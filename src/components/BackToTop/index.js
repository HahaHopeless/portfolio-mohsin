import "./styles.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const BackToTop = (props) => {
  return (
    <div
      className={`d-flex btn-goup justify-content-center align-items-center ${props.animation}`}
      id='btn-goup'
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      <FontAwesomeIcon icon={faArrowUp} color='#FFFFFF' />
    </div>
  );
};

export default BackToTop;

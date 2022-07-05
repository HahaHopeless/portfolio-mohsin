import "./styles.css";
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GradientButton = ({ onClick, text, icon, color }) => {
  return (
    <div
      className={`btn-hover ${color} d-flex justify-content-center align-items-center`}
      onClick={onClick}
    >
      <div style={{ minWidth: "150px" }}>
        <FontAwesomeIcon icon={icon} className='downloadIcon' opacity={0.4} />
        <span style={{ userSelect: "none", color: "white" }}>{text}</span>
      </div>
    </div>
  );
};

export default GradientButton;

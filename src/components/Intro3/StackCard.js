import "./styles.css";
import React, { useState } from "react";
import { FormattedMessage } from "react-intl";

const StackCard = (props) => {
  return (
    <div className='stack-card-container'>
      {/* <h1>{props.title}</h1> */}
      <img
        src={require(`../../assets/icons/${props.icon}.svg`)}
        className='tech-icon'
      />
    </div>
  );
};

export default StackCard;

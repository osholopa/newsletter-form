import React from "react";
import "./Button.scss";

const Button = ({ type = "button", disabled, text }) => {
  return (
    <div className="field-container">
      <button
        aria-disabled={disabled}
        className="button"
        type={type}
        disabled={disabled}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;

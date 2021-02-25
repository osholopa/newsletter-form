import React from "react";
import "./Button.scss";

const Button = ({ type = "button", disabled, text }) => {
  return (
    
      <button
        aria-disabled={disabled}
        className="button"
        type={type}
        disabled={disabled}
      >
        {text}
      </button>
   
  );
};

export default Button;

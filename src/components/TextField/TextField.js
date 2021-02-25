import React from "react";
import "./TextField.scss";

const TextField = ({
  label,
  error,
  name,
  id,
  inputRef,
  placeholder,
  required,
  ...props
}) => {
  return (
    <div className="field-container">
      <div className="label-wrapper">
        <input
          aria-required={true}
          aria-label={label}
          placeholder={`${placeholder}${required ? '*' : ''}`}
          style={
            error
              ? { border: "1.15px solid #b70808" }
              : { border: "1.15px solid #909090" }
          }
          id={id}
          className="text-input"
          name={name}
          type="text"
          ref={inputRef}
          {...props}
        />
      </div>
      {error && <span className="error-speech-bubble error-speech-bubble-textfield">{error.message}</span>}
    </div>
  );
};

export default TextField;

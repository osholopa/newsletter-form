import React from "react";
import "./Checkbox.scss";

const Checkbox = ({ label, error, name, id, inputRef, required, ...props }) => {
  return (
    <div className="field-container">
      <div className="label-wrapper">
        <input
          aria-label={label}
          aria-required={true}
          id={id}
          name={name}
          type="checkbox"
          ref={inputRef}
          {...props}
        />
        <label htmlFor={id}>{label} {required ? '*' : ''}</label>
      </div>
      {error && (
        <div style={{ width: "fit-content" }}>
          <span className="error-speech-bubble">{error.message}</span>
        </div>
      )}
    </div>
  );
};

export default Checkbox;

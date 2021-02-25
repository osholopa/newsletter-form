import React from "react";
import "./Snackbar.scss";

const Snackbar = ({ type, message, setNotification }) => {
  let messageStyle;
  switch (type) {
    case "error":
      messageStyle = {
        border: "1px solid #8c161a",
        backgroundColor: "#fdf2f2",
      };
      break;
    case "info":
      messageStyle = {
        border: "1px solid #3b86d1",
        backgroundColor: "#e6f2ff",
      };
      break;
    default:
      messageStyle = {
        border: "1px solid #129939",
        backgroundColor: "#dcf7e2",
      };
      break;
  }

  const handleClose = () => {
    setNotification(null)
  }

  return (
    <div style={messageStyle} className="snackbar">
      <div onClick={handleClose} className="close-btn" />
      <div>{message}</div>
    </div>
  );
};

export default Snackbar;

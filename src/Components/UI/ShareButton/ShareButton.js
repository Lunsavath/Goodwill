import React from "react";
import classes from "./ShareButton.css";
import shareicon from "../../../Assets/SVG/Shareicon.svg";

const shareButton = (props) => {
  return (
    <div className={classes.sharebutton}>
      <img src={shareicon} alt="icon" />
      <text>Share post</text>
    </div>
  );
};

export default shareButton;

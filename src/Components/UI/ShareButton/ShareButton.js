import React from "react";
import classes from "./ShareButton.css";
import shareicon from "../../../Assets/SVG/Shareicon.svg";

const shareButton = (props) => {
  return (
    <div className={classes.sharebutton}>
      <img src={shareicon} alt="icon" />
      <span className={classes.sharebutton_text}>Share post</span>
    </div>
  );
};

export default shareButton;

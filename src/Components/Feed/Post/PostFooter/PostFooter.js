import React from "react";
import classes from "./PostFooter.css";
import shareicon from "../../../../Assets/SVG/Shareicon.svg";

const postFooter = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.trend}>
        <text>#1 in Sports</text>
      </div>
      <div className={classes.sharebutton}>
        <img src={shareicon} alt="icon" />
        <text>Share post</text>
      </div>
    </div>
  );
};

export default postFooter;

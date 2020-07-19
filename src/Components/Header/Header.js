import React from "react";
import classes from "./Header.css";
import Logo from "./Logo/Logo";
import sublogo from "../../Assets/SVG/sublogo.svg";
const header = () => {
  return (
    <div className={classes.header}>
      <div>{Logo}</div>
      <div className={classes.logoname}>GRATITUDE WALL</div>
      <div className={classes.sublogo}>
        <img src={sublogo} alt="" />
      </div>
      <div className={classes.usebutton}>
        <div className={classes.text}>USE APP</div>
      </div>
    </div>
  );
};

export default header;

import React from "react";
import classes from "./Logo.css";
import vector1 from "../../../Assets/SVG/Vector1.svg";
import vector2 from "../../../Assets/SVG/Vector2.svg";
import vector3 from "../../../Assets/SVG/Vector3.svg";
import vector4 from "../../../Assets/SVG/Vector4.svg";

const logo = (
  <div>
    <img className={classes.vector1} src={vector1} alt="" />
    <img className={classes.vector2} src={vector2} alt="" />
    <img className={classes.vector3} src={vector3} alt="" />
    <img className={classes.vector4} src={vector4} alt="" />
  </div>
);

export default logo;

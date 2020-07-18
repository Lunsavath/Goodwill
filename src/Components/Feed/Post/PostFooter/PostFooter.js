import React from "react";
import classes from "./PostFooter.css";
//import Trending from "../../../UI/Trending/Trending";

const postFooter = () => {
  return (
    <div className={classes.content}>
      <div className={classes.footersection}>
        <div className={classes.trending}></div>
      </div>
    </div>
  );
};

export default postFooter;

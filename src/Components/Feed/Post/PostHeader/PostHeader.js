import React from "react";
import classes from "./PostHeader.css";
import profilepic from "../../../../Assets/Images/self.jpg";

const postHeader = () => {
  return (
    <div>
      <div className={classes.imagecontainer}>
        <img className={classes.image} src={profilepic} alt="profilepic" />
      </div>
      <div className={classes.nameholder}>Tony Kroos</div>
      <div className={classes.timestamp}>3 Hours Ago</div>
    </div>
  );
};

export default postHeader;

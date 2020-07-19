import React from "react";
import classes from "./PostContent.css";
import contentimage from "../../../../Assets/Images/contentimage.jpg";

const postContent = () => {
  return (
    <div className={classes.container}>
      <div className={classes.image}>
        <img src={contentimage} alt="" />
      </div>
      <div className={classes.text}>
        <text>
          I saw this man on the road starving and decided to thank him for his
          service to community.
        </text>
        <div>
          <a className={classes.fullpost} href=" ">
            See full post
          </a>
        </div>
      </div>
    </div>
  );
};

export default postContent;

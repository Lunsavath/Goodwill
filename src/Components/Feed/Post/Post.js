import React from "react";
import classes from "./Post.css";
import profilepic from "../../../Assets/Images/self.jpg";
import contentimage from "../../../Assets/Images/contentimage.jpg";
import shareicon from "../../../Assets/SVG/Shareicon.svg";

const post = () => {
  return (
    <div className={classes.post}>
      <div className={classes.header}>
        <div className={classes.profileimage}>
          <img className={classes.pic} src={profilepic} alt="" />
        </div>
        <div className={classes.name}>Tony Kroos</div>
        <div className={classes.timestamp}>3 Hours Ago</div>
      </div>
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
      <div className={classes.footer}>
        <div className={classes.trend}>
          <text>#1 in Sports</text>
        </div>
        <div className={classes.sharebutton}>
          <img src={shareicon} alt="icon" />
          <text>Share post</text>
        </div>
      </div>
    </div>
  );
};

export default post;

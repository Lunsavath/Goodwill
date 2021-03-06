import React from "react";
import classes from "./FullPost.css";
import pic from "../../../Assets/Images/self.jpg";
import { Link } from "react-router-dom";

const fullPost = (props) => {
  return (
    <div className={classes.fullpost_container}>
      <div className={classes.photo_container}>
        <img src={props.profilepic} alt=" " />
      </div>
      <div className={classes.sidebar}>
        <div className={classes.profileimage}>
          <img src={props.profilePic} alt="" />
        </div>
        <div className={classes.profilename}>Tony Kroos</div>
        <div className={classes.timestamp}>3 Hours Ago</div>
      </div>
      <div className={classes.feedlink}>
        <Link to="/" className={classes.feedlink_text}>
          See more posts
        </Link>
      </div>
    </div>
  );
};

export default fullPost;

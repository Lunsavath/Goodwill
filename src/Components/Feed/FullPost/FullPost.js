import React from "react";
import classes from "./FullPost.css";
import pic from "../../../Assets/Images/self.jpg";
import { Link } from "react-router-dom";

const fullPost = (props) => {
  const feedId = Object.keys(props.users).map((key) => ({
    id: props.users,
    ...props.users[key],
  }));
  return (
    <div className={classes.fullpost_container}>
      <div className={classes.photo_container}>
        <img src={feedId.profilePic} alt=" " />
      </div>
      <div className={classes.sidebar}>
        <div className={classes.profileimage}>
          <img src={pic} alt="" />
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

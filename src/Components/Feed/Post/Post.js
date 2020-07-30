import React from "react";
import classes from "./Post.css";
import ShareButton from "../../UI/ShareButton/ShareButton";
import { Link } from "react-router-dom";

const post = (props) => {
  return (
    <div className={classes.post}>
      <div className={classes.header}>
        <div className={classes.profileimage}>
          <img className={classes.pic} src={props.profilepic} alt="" />
        </div>
        <div className={classes.name}>{props.profilename}</div>
        <div className={classes.timestamp}>{props.timestamp}</div>
      </div>
      <div className={classes.container}>
        <div className={classes.image}>
          <img src={props.contentimage} alt="" />
        </div>
        <div>
          <div className={classes.text}>
            <span>{props.contenttext}</span>
          </div>
          <div className={classes.fullpost}>
            <Link to="/fullpost" {...props}>
              See Full Post
            </Link>
          </div>
        </div>
      </div>
      <div className={classes.footer}>
        <div className={classes.trend}>
          <span>{props.trend}</span>
        </div>
        <ShareButton />
      </div>
    </div>
  );
};

export default post;

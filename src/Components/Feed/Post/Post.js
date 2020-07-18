import React from "react";
import classes from "./Post.css";
import PostHeader from "../Post/PostHeader/PostHeader";
import PostFooter from "../Post/PostFooter/PostFooter";

const post = () => {
  return (
    <div className={classes.post}>
      <PostHeader />
      <PostFooter />
    </div>
  );
};

export default post;

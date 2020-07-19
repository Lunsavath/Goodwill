import React from "react";
import classes from "./Post.css";
import PostHeader from "../Post/PostHeader/PostHeader";
import PostFooter from "../Post/PostFooter/PostFooter";
import PostContent from "../Post/PostContent/PostContent";

const post = () => {
  return (
    <div className={classes.post}>
      <PostHeader />
      <PostContent />
      <PostFooter />
    </div>
  );
};

export default post;

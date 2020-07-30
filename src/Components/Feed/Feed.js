import React from "react";
import Post from "./Post/Post";
import classes from "./Feed.css";

const feed = (props) => {
  const feedItems = Object.keys(props.users).map((key) => ({
    id: key,
    ...props.users[key],
  }));
  return (
    <div className={classes.feed}>
      {feedItems.map((items) => (
        <Post
          key={items.id}
          profilename={items.profileName}
          profilepic={items.profilePic}
          timestamp={items.timeStamp}
          contentimage={items.contentImage}
          contenttext={items.contentText}
          trend={items.trend}
        ></Post>
      ))}
    </div>
  );
};

export default feed;

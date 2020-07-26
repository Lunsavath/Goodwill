import React from "react";
import Post from "./Post/Post";
import classes from "./Feed.css";

const feed = (props) => {
  const feedItems = Object.keys(props.users).map((key) => ({
    id: props.users,
    ...props.users[key],
  }));
  return (
    <div className={classes.feed}>
      {feedItems.map((items) => (
        <Post
          key={items.id}
          profileName={items.profileName}
          profilePic={items.profilePic}
          timeStamp={items.timeStamp}
          contentImage={items.contentImage}
          contentText={items.contentText}
          trend={items.trend}
        ></Post>
      ))}
    </div>
  );
};

export default feed;

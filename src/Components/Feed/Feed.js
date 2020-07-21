import React, { Component } from "react";
import Post from "./Post/Post";
import axios from "axios";
import classes from "./Feed.css";

class Feed extends Component {
  state = {
    users: null,
  };

  componentDidMount() {
    axios
      .get("https://goodwill-60d8a.firebaseio.com/Users.json")
      .then((response) => {
        this.setState({ users: response.data });
      });
  }

  render() {
    let feed = { ...this.state.users };
    const feedItems = Object.keys(feed).map((key) => ({
      id: feed,
      ...feed[key],
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
  }
}

export default Feed;

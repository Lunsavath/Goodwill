import React, { Component } from "react";
import classes from "./Post.css";
import profilepic from "../../../Assets/Images/self.jpg";
import contentimage from "../../../Assets/Images/contentimage.jpg";
import ShareButton from "../../UI/ShareButton/ShareButton";
import axios from "axios";

class Post extends Component {
  state = {
    profileDetails: {
      profileName: null,
      timeStamp: null,
      contentImage: null,
      contentText: null,
      profilePic: null,
    },
  };

  componentDidMount() {
    console.log("details");
    axios
      .get("https://goodwill-60d8a.firebaseio.com/profileDetails.json")
      .then((response) => {
        this.setState({ profileDetails: response.data });
      })
      .catch("error");
  }

  render() {
    return (
      <div className={classes.post}>
        <div className={classes.header}>
          <div className={classes.profileimage}>
            <img className={classes.pic} src={profilepic} alt="" />
          </div>
          <div className={classes.name}>
            {this.state.profileDetails.profileName}
          </div>
          <div className={classes.timestamp}>
            {this.state.profileDetails.timeStamp}
          </div>
        </div>
        <div className={classes.container}>
          <div className={classes.image}>
            <img src={contentimage} alt="" />
          </div>
          <div className={classes.text}>
            <text>{this.state.profileDetails.contentText}</text>
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
          <ShareButton />
        </div>
      </div>
    );
  }
}

export default Post;

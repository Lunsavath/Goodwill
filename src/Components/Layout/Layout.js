import React, { Component } from "react";
import Header from "../Header/Header";
import classes from "./Layout.css";
import Feed from "../Feed/Feed";

class Layout extends Component {
  render() {
    return (
      <div className={classes.main}>
        <div>
          <Header />
        </div>
        <div className={classes.content}>
          <Feed />
        </div>
      </div>
    );
  }
}

export default Layout;

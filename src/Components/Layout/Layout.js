import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Header from "../Header/Header";
import classes from "./Layout.css";
import Post from "../Feed/Post/Post";

class Layout extends Component {
  render() {
    return (
      <Aux>
        <div className={classes.main}>
          <Header />
          <div className={classes.content}>
            <Post />
          </div>
        </div>
      </Aux>
    );
  }
}

export default Layout;

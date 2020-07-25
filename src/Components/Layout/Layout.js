import React, { Component } from "react";
import Header from "../Header/Header";
import classes from "./Layout.css";
import Feed from "../Feed/Feed";
import { Route, Switch } from "react-router-dom";
import FullPost from "../Feed/FullPost/FullPost";

class Layout extends Component {
  render() {
    return (
      <div className={classes.main}>
        <div>
          <Header />
        </div>
        <div className={classes.content}>
          <Switch>
            <Route path="/" exact component={Feed} />
            <Route path="/fullpost" component={FullPost} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Layout;

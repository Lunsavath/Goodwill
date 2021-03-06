import React, { Component } from "react";
import Header from "../Header/Header";
import classes from "./Layout.css";
import { Route, Switch } from "react-router-dom";
import FullPost from "../Feed/FullPost/FullPost";
import axios from "axios";
import Feed from "../Feed/Feed";

class Layout extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    axios
      .get("https://goodwill-60d8a.firebaseio.com/Users.json")
      .then((response) => {
        this.setState({ users: response.data });
      });
  }

  render() {
    console.log(this.state.users);
    return (
      <div className={classes.main}>
        <div>
          <Header />
        </div>
        <div className={classes.content}>
          <Switch>
            <Route
              path="/"
              exact
              render={() => <Feed users={this.state.users} />}
            />
            <Route path="/fullpost" exact render={() => <FullPost />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Layout;

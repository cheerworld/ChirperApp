import React, { Component } from "react";
import { handleInitialData } from "../actions/shared";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }
  render() {
    return (
      <div>
        Starter Code
        {Object.values(this.props.tweets).map(({ author, id }) => (
          <p key={id}>{author}</p>
        ))}
        {Object.values(this.props.users).map(({ name, id }) => (
          <h1 key={id}>{name}</h1>
        ))}
      </div>
    );
  }
}

export default connect((state) => ({
  tweets: state.tweets,
  users: state.users,
}))(App);

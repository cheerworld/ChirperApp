import React, { Component } from 'react'
import { getData } from "../actions/shared";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getData());
  }
  render() {
    console.log(this.props.tweets)
    return (
      <div>
        Starter Code
        {Object.values(this.props.tweets).map(({author, id}) => (
          <p key={id}>{author}</p>
        ))}
      </div>
    )
  }
}

export default connect(state => ({
  tweets: state.tweets,
}))(App);

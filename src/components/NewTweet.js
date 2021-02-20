import React, { Component } from "react";
import { handleAddTweet } from "../actions/tweets";
import { connect } from "react-redux";

class NewTweet extends Component {
  state = {
    text: "",
  };

  handleChange = (e) => {
    const text = e.target.value;
    this.setState(() => ({
      text,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { text } = this.state;
    const { dispatch, id } =this.props;

    console.log("New tweet is: ", text);

    this.setState(() => ({
      text: "",
    }));

    dispatch(handleAddTweet(text, id));
  }

  render() {
    const { text } = this.state;

    {/* todo: Redirect to / if submited*/}
    const tweetLeft = 280 - text.length;
    return (
      <div>
        <h3 className="center">Compose New Tweet</h3>
        <form className="new-tweet" onSubmit={this.handleSubmit}>
          <textarea
            placeholder="What's happening?"
            value={text}
            onChange={this.handleChange}
            className="textarea"
            maxLength={280}
          />
          {tweetLeft <= 100 && <div className="tweet-length">{tweetLeft}</div>}
          <button className="btn" type="submit" disabled={text === ""}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps() {

}

export default connect(mapStateToProps)(NewTweet);

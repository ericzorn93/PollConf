import React, { Component } from "react";
import axios from "axios";
import PollAnswer from "../components/PollAnswer";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pollAnswers: []
    };
  }

  componentWillMount = async () => {
    const pollResponse = await axios.get("/api/poll");

    // Get All Poll Data
    const {
      data: { data }
    } = pollResponse;
    const polls = data;

    // Load Polls to State
    this.setState({ pollAnswers: polls });
  };

  render() {
    const { pollAnswers } = this.state;
    console.log(pollAnswers);

    if (pollAnswers.length && pollAnswers) {
      return (
        <div className={"container"}>
          <h1>All Polls</h1>
          <ul>
            {pollAnswers.map(({ _id, title, author, message, updated_at }) => (
              <div key={_id}>
                <li>
                  <PollAnswer
                    title={title}
                    author={author}
                    message={message}
                    updated_at={updated_at}
                  />
                </li>
                <br />
              </div>
            ))}
          </ul>
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

export default Home;

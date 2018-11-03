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

    if (pollAnswers.length && pollAnswers) {
      return (
        <div className={"container"}>
          <h1>All Polls</h1>
          <ul>
            {pollAnswers.map(poll => (
              <div key={poll._id}>
                <li>
                  <PollAnswer
                    id={poll._id}
                    title={poll.title}
                    author={poll.author}
                    message={poll.message}
                    updated_at={poll.updated_at}
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

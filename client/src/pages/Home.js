import React, { Component } from "react";
import axios from "axios";
import PollAnswer from "../components/PollAnswer";
import { css } from "emotion";

const inputClass = css`
  color: blue;
`;

const addItemButton = css`
  background-color: green;
`;

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pollAnswers: []
    };
  }

  async componentWillMount() {
    const pollResponse = await axios.get("/api/poll");

    // Get All Poll Data
    const {
      data: { data }
    } = pollResponse;
    const polls = data;

    // Load Polls to State
    this.setState({ pollAnswers: polls });
  }

  addPost = e => {
    e.preventDefault();
    if (
      this.title.value.length > 3 &&
      this.author.value.length > 3 &&
      this.question.value.length > 5
    ) {
      axios
        .post(`/api/poll/`, {
          title: this.title.value,
          author: this.author.value,
          question: this.question.value
        })
        .then(() => {
          console.log(this.props);

          // Fake Redirect
          // this.props.history.push("/id");
          // // Reload Homepage
          // this.props.history.push("/");

          // Reload Page
          this.props.history.go();
        })
        .catch(err => {
          console.error(err);
          console.log(this.title.value);
        });
    } else {
      alert("Please fill in the proper inputs");
    }
  };

  render() {
    const { pollAnswers } = this.state;

    if (pollAnswers.length && pollAnswers) {
      return (
        <div className={"container"}>
          <h1>All Polls</h1>
          <form onSubmit={this.addPost}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              className={inputClass}
              ref={input => (this.title = input)}
            />
            <input
              type="text"
              name="author"
              placeholder="Author"
              className={inputClass}
              ref={input => (this.author = input)}
            />
            <input
              type="text"
              name="question"
              placeholder="Question"
              className={inputClass}
              ref={input => (this.question = input)}
            />
            <button className={`btn ${addItemButton}`}>Add Item</button>
          </form>

          <br />

          <ul>
            {pollAnswers.map(poll => (
              <div key={poll._id}>
                <li>
                  <PollAnswer
                    id={poll._id}
                    title={poll.title}
                    author={poll.author}
                    question={poll.question}
                    created_at={poll.created_at}
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
      return <p>Loading...</p>;
    }
  }
}

export default Home;

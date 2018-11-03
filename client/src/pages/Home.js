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
              ref={input => (this.title = input)}
            />
            <input
              type="text"
              name="author"
              placeholder="Author"
              ref={input => (this.author = input)}
            />
            <input
              type="text"
              name="question"
              placeholder="Question"
              ref={input => (this.question = input)}
            />
            <button>Add Item</button>
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
      return (
        <div className={"container"}>
          <h1>No Items</h1>
          <form onSubmit={this.addPost}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              ref={input => (this.title = input)}
            />
            <input
              type="text"
              name="author"
              placeholder="Author"
              ref={input => (this.author = input)}
            />
            <input
              type="text"
              name="question"
              placeholder="Question"
              ref={input => (this.question = input)}
            />
            <button>Add Item</button>
          </form>
        </div>
      );
    }
  }
}

export default Home;

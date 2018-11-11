import React, { Component } from "react";
import { css } from "emotion";
import axios from "axios";
import Moment from "react-moment";
import "moment-timezone";

const textCenterClass = css`
  text-align: center;
`;

const dangerButtonClass = css`
  background-color: red;
  margin-left: 5px;
`;

export class Edit extends Component {
  state = {
    _id: "",
    title: "",
    author: "",
    question: "",
    created_at: ""
  };

  componentDidMount = () => {
    const { id } = this.props.match.params;
    axios.get(`/api/poll/${id}`).then(data => {
      const { _id, title, author, question, created_at } = data.data.data;
      this.setState({
        _id,
        title,
        author,
        question,
        created_at
      });
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { title, author, question } = this.state;
    if(title && author && question) {
        axios.put(`/api/poll/${this.state._id}`, {
                title: title,
                author: author,
                question: question
            })
            .then(data => {
              this.props.history.push(`/${this.state._id}`);
            })
            .catch(error => console.error(error));
    }
  };

  handleInputChange = e => {
    this.setState({
        [e.target.name]: e.target.value,
    });
  };

  backButton = () => {
    this.props.history.push(`/${this.state._id}`);
  };

  render() {
    const { _id, title, author, question, created_at } = this.state;

    if(!_id && !title && !author && !question && !created_at) {
      return <p>Loading...</p>;
    }

    return (
          <div className={`container`}>
              <h1 className={textCenterClass}>Edit Post</h1>
              <p>Post ID: {_id}</p>
              <form onSubmit={this.handleSubmit}>
                  <div className="row">
                      <label htmlFor="title">Title: </label>
                      <input
                          id="title"
                          name={'title'}
                          onChange={this.handleInputChange}
                          type="text"
                          className="validate"
                          value={title}
                          />
                  </div>
                  <div className="row">
                      <label htmlFor="author">Author:</label>
                      <input
                          id="author"
                          name={'author'}
                          onChange={this.handleInputChange}
                          type="text"
                          className="validate"
                          value={author}
                      />
                  </div>
                  <div className="row">
                      <label htmlFor="question">Question:</label>
                      <input
                          id="question"
                          name={'question'}
                          onChange={this.handleInputChange}
                          type="text"
                          className="validate"
                          value={question}
                      />
                  </div>
                  <div className="row">
                      <p>
                          Created At:{" "}
                          <strong>
                              <Moment format={"M/D/YYYY h:m:s"}>{created_at}</Moment>
                              {/*{created_at}*/}
                          </strong>
                      </p>
                  </div>
                  <div className="row">
                      <button className="btn">Edit Post</button>
                      <button
                          className={`btn ${dangerButtonClass}`}
                          onClick={this.backButton}
                      >
                          Back
                      </button>
                  </div>
              </form>
          </div>
      );
  }
}

export default Edit;

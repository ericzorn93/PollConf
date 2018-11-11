import React, { Component } from "react";
import { css } from "emotion";
import axios from "axios";
import Moment from "react-moment";
import "moment-timezone";

const textCenterClass = css`
  text-align: center;
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
      console.log(data.data.data);
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

  handleEdit = event => {
    event.preventDefault();
    console.log("Form Submitted");
  };

  render() {
    const { _id, title, author, question, created_at } = this.state;

    return (
      <div className={`container`}>
        <h1 className={textCenterClass}>Edit Post</h1>
        <p>Post ID: {_id}</p>
        <form onSubmit={this.handleEdit}>
          <div className="row">
            <label htmlFor="title">Title: </label>
            <input id="title" type="text" className="validate" value={title} />
          </div>
          <div className="row">
            <label htmlFor="author">Author:</label>
            <input
              id="author"
              type="text"
              className="validate"
              value={author}
            />
          </div>
          <div className="row">
            <label htmlFor="question">Question:</label>
            <input
              id="question"
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
              </strong>
            </p>
          </div>
          <div className="row">
            <button className="btn">Edit Post</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Edit;

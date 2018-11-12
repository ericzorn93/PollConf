import React, { Component } from "react";
import axios from "axios";
import Moment from "react-moment";
import "moment-timezone";
import { Link } from "react-router-dom";
import { css } from "emotion";
// import PropTypes from "prop-types";

const linkClass = css`
  font-size: 15px;
  font-weight: 700;
  margin: 5px;
`;

const btnClass = css`
  margin: 5px;
`;

const editButtonClass = css`
  background-color: green;
`;

class SinglePoll extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {}
    };
  }

  componentDidMount = async () => {
    const { id } = this.props.match.params;
    const {
      data: { data }
    } = await axios.get(`/api/poll/${id}`);

    this.setState({ post: data });
  };

  deletePollItem = () => {
    axios
      .delete(`/api/poll/${this.props.match.params.id}`)
      .then(() => this.props.history.push("/"))
      .catch(err => console.log(err));
  };

  editPost = () => {
    const { match, history } = this.props;
    const { id } = match.params;
    history.push(`/edit/${id}`);
  };

  render() {
    if (this.state.post !== {}) {
      return (
        <div className={"container"}>
          <h3 style={{ textAlign: "center" }}>Single Post</h3>
          <h5>
            <strong>Title:</strong> {this.state.post.title}
          </h5>
          <h5>
            <strong>Author:</strong> {this.state.post.author}
          </h5>
          <h5>
            <strong>Question:</strong> {this.state.post.question}
          </h5>
          <p>
            <strong>Created At:</strong>{" "}
            <Moment format={"M/D/YYYY h:m:s"}>
              {this.state.post.created_at}
            </Moment>
          </p>
          <p>
            <strong>Updated At:</strong>{" "}
            <Moment format={"M/D/YYYY h:m:s"}>
              {this.state.post.updated_at}
            </Moment>
          </p>
          <Link className={linkClass} to={"/"}>
            Back Home
          </Link>
          <button className={`${btnClass} btn`} onClick={this.deletePollItem}>
            Delete
          </button>
          <button
            className={`${btnClass} btn ${editButtonClass}`}
            onClick={this.editPost}
          >
            Edit
          </button>
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

export default SinglePoll;

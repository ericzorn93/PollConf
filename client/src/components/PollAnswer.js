import React, { Component } from "react";
import Moment from "react-moment";
import "moment-timezone";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class PollAnswer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    // console.log("Poll", this.props.totalPoll);
  };

  render() {
    const { id, title, author, question, created_at, updated_at } = this.props;

    if (!id && !title && !author && !question && !created_at && !updated_at) {
      return <p>Loading...</p>;
    } else {
      return (
        <React.Fragment>
          <strong>Title: </strong>
          <Link to={`/${id}`}>{title}</Link>
          <br />
          <strong>Author: </strong>
          {author}
          <br />
          <strong>Message: </strong>
          {question}
          <br />
          <strong>Created At: </strong>
          <Moment format="MM/DD/YYYY h:m:s">{created_at}</Moment>
          <br />
          <strong>Updated At: </strong>
          <Moment format="MM/DD/YYYY h:m:s">{updated_at}</Moment>
        </React.Fragment>
      );
    }
  }
}

// Prop Type Checking
PollAnswer.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  question: PropTypes.string,
  created_at: PropTypes.string,
  updated_at: PropTypes.string
};

export default PollAnswer;

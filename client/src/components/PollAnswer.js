import React, { Component } from "react";
import Moment from "react-moment";
import "moment-timezone";
import { Link } from "react-router-dom";

class PollAnswer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("Poll", this.props.totalPoll);
  }

  render() {
    const { id, title, author, question, created_at, updated_at } = this.props;

    if(!id && !title && !author && !question && !created_at &&!updated_at) {
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
                <br/>
                <strong>Updated At: </strong>
                <Moment format="MM/DD/YYYY h:m:s">{updated_at}</Moment>
            </React.Fragment>
        );
    }
  }
}

export default PollAnswer;

import React, { Component } from "react";
import Moment from "react-moment";
import "moment-timezone";
import { Link } from "react-router-dom";

class PollAnswer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMoun() {
    console.log("Poll", this.props.totalPoll);
  }

  render() {
    return (
      <React.Fragment>
        <strong>Title: </strong>
        <Link to={`/${this.props.id}`}>{this.props.title}</Link>
        <br />
        <strong>Author: </strong>
        {this.props.author}
        <br />
        <strong>Message: </strong>
        {this.props.question}
        <br />
        <strong>Created At: </strong>
        <Moment format="MM/DD/YYYY h:m:s">{this.props.created_at}</Moment>
        <br/>
        <strong>Updated At: </strong>
        <Moment format="MM/DD/YYYY h:m:s">{this.props.updated_at}</Moment>
      </React.Fragment>
    );
  }
}

export default PollAnswer;

import React, { Component } from "react";
import Moment from "react-moment";
import "moment-timezone";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

class PollAnswer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
        {this.props.message}
        <br />
        <strong>Updated At: </strong>
        <Moment format="MM/DD/YYYY">{this.props.updated_at}</Moment>
      </React.Fragment>
    );
  }
}

export default PollAnswer;

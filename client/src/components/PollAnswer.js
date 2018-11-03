import React from "react";
import Moment from "react-moment";
import "moment-timezone";
import { Link } from "react-router-dom";

const PollAnswer = props => {
  return (
    <React.Fragment>
      <strong>Title: </strong>
      <Link to={`/${props.id}`}>{props.title}</Link>
      <br />
      <strong>Author: </strong>
      {props.author}
      <br />
      <strong>Message: </strong>
      {props.message}
      <br />
      <strong>Updated At: </strong>
      <Moment format="MM/DD/YYYY">{props.updated_at}</Moment>
    </React.Fragment>
  );
};

export default PollAnswer;

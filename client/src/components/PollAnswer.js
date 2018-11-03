import React from "react";
import Moment from "react-moment";
import "moment-timezone";

const PollAnswer = props => {
  return (
    <React.Fragment>
      <strong>Title: </strong>
      {props.title}
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

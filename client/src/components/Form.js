import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="linuxBtn">Linux</label>
          <input type="radio" name="linux" value="linux" id="linuxBtn" />
        </form>
      </div>
    );
  }
}

export default Form;

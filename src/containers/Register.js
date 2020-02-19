import React from "react";
import { connect } from "react-redux";
import { register } from "../store/actions/authActions";

class Register extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <>
        <h1>Register</h1>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.register(this.state, this.props.history);
          }}
        >
          <input
            type="text"
            placeholder="username"
            name="username"
            onChange={this.handleChange}
          />
          <input
            type="password"
            placeholder="username"
            name="password"
            onChange={this.handleChange}
          />
          <button type="submit">Register</button>
        </form>
      </>
    );
  }
}

export default connect(
  null,
  {
    register
  }
)(Register);

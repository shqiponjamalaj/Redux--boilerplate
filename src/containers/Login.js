import React from "react";
import { connect } from "react-redux";
import { login } from "../store/actions/authActions";

class Login extends React.Component {
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
        <h1>Login</h1>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.login(this.state, this.props.history);
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
          <button type="submit">Login</button>
        </form>
      </>
    );
  }
}

export default connect(
  null,
  { login }
)(Login);

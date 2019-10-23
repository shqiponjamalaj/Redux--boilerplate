import React from "react";
import { Redirect } from "react-router-dom";

export const Auth = Component => {
  return class extends React.Component {
    render() {
      if (localStorage.getItem("token")) {
        return <Component {...this.props} />;
      } else {
        return <Redirect to="/login" />;
      }
    }
  };
};

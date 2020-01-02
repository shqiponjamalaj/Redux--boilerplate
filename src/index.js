import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./store/store";
import { Provider } from "react-redux";
import { Router, withRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const WithRouter = withRouter(App);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <WithRouter />
    </Router>
  </Provider>,
  document.getElementById("root")
);

import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "./containers/Dashboard";
import Login from "./containers/Login";
import Register from "./containers/Register";
import LandingPage from "./containers/LandingPage";
import { Auth } from "./containers/auth-HOC";

const ProtectedDashboard = Auth(Dashboard);

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={LandingPage} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={ProtectedDashboard} />
      </div>
    );
  }
}

export default App;

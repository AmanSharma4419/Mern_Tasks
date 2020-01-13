import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AdminLogin from "./components/Adminlogin";
import AdminPannel from "./components/AdminPannel";
import MentorRegistration from "./components/MentorRegistration";
class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Router>
          <Route exact path="/" component={AdminLogin} />
          <Route path="/admin-pannel" component={AdminPannel} />
          <Route path="/mentor-registration" component={MentorRegistration} />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;

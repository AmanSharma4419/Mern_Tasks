import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/Homepage";
import AdminLogin from "./components/Adminlogin";
import AdminPannel from "./components/AdminPannel";
import MentorRegistration from "./components/MentorRegistration";
import CreateMentor from "./components/crudOperation/CreateMentor";
import ReadMentor from "./components/crudOperation/ReadMentor";
import DeleteMentor from "./components/crudOperation/DeleteMentor";
import UpdateMentor from "./components/crudOperation/UpdateMentor";
import AddingTask from "./components/AddingTasks";
class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Router>
          <Route exact path="/" component={HomePage} />
          <Route path="/admin-login" component={AdminLogin} />
          <Route path="/admin-pannel" component={AdminPannel} />
          <Route path="/mentor-registration" component={MentorRegistration} />
          <Route path="/create-mentor" component={CreateMentor} />
          <Route path="/read-mentor" component={ReadMentor} />
          <Route path="/delete-mentor" component={DeleteMentor} />
          <Route path="/update-mentor/:mentor" component={UpdateMentor} />
          <Route path="/adding-task" component={AddingTask} />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;

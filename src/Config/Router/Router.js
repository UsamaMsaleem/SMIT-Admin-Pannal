import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "../../Containers/Login/Login";
import Registeredstudent from "../../Containers/Registeredstudent/Registeredstudent";
import Addcourses from "../../Containers/Addcourses/Addcourses";
import Availablecourses from "../../Containers/Availablecourses/Availablecourses";
import Result from "../../Containers/Result/Result";

class MainRouter extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Registeredstudent} />
        <Route path="/result" component={Result} />
        <Route path="/addcourses" component={Addcourses} />
        <Route path="/Availablecourses" component={Availablecourses} />
      </Router>
    );
  }
}

export default MainRouter;

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from '../../Containers/Login/Login';
import Dashboard from '../../Components/Dashboard/Dashboard';
import Registeredstudent from '../../Containers/Registeredstudent/Registeredstudent';
import Addcourses from '../../Containers/Addcourses/Addcourses';
import Result from '../../Containers/Result/Result';



class MainRouter extends React.Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={Login} />
                <Route path="/dashboard" component={Registeredstudent} />
                {/* <Route path="/registeredstudent" component={Registeredstudent} />  */}
                <Route path="/result" component={Result} />
                <Route path="/addcourses" component={Addcourses} />
            </Router>
        )
    }
}

export default MainRouter;
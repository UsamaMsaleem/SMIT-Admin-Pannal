import React from 'react';
import Dashboard from '../../Components/Dashboard/Dashboard';

import './Addcourses.css';


class Addcourses extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
        <Dashboard>
      <div className="main">
        <h1 className="hedingcourse"><b>Add Courses </b></h1>
      </div>
      </Dashboard>
    )
  }
}

export default Addcourses;
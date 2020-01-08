import React from 'react';
import Dashboard from '../../Components/Dashboard/Dashboard';

import './Result.css';


class Result extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
        <Dashboard>
      <div className="main">
        <h1 className="hedingResult"><b> Result Students </b></h1>
      </div>
      </Dashboard>
    )
  }
}

export default Result;
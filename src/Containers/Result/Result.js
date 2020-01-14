import React from 'react';
import Dashboard from '../../Components/Dashboard/Dashboard';
import './Result.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";


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
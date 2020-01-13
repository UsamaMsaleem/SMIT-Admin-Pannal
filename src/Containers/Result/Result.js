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
      //   <Dashboard>
      // <div className="main">
      //   <h1 className="hedingResult"><b> Result Students </b></h1>
      //   </div>
 
      // </Dashboard>
<div>
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#basicExampleModal">
  Launch demo modal
</button>


<div className="modal fade" id="basicExampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
  aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        {/* <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button> */}
        {/* <button type="button" className="btn btn-primary">Save changes</button> */}
      </div>
    </div>
  </div>
</div>
</div>



    )
  }
}

export default Result;
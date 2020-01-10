import React from "react";
import Dashboard from "../../Components/Dashboard/Dashboard";
import EditIcon from "@material-ui/icons/Edit";
import Fab from "@material-ui/core/Fab";

import "./Availablecourses.css";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBModalFooter
} from "mdbreact";

class Availablecourses extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
      Timings: ["friday", "Monday", "Tuesday", "Wednaesday"],
      Instructions: [
        "It is a long established fact that a reader will be distracted by the readable.",
        " Many desktop publishing packages and web page editors now use Lorem Ipsum as their default",
        " The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
        " model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
        " Many desktop publishing packages and web page editors now use Lorem Ipsum as their default"
      ]
    };
  }

  click() {
    if (this.state.open === false) {
      this.setState({
        open: true
      });
    } else {
      this.setState({
        open: false
      });
    }
  }

  render() {
    return (
      <Dashboard>
        <div className="main">
          <h1 className="hedingcourse">
            <b>Available Courses </b>
          </h1>
          <br />
          <MDBCol className="col-sm-12 col-md-6 col-lg-12">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title coursetext">
                  <span className="Acourses">CourseName :</span> Mobile App And
                  Web Development
                </h4>
                <h6 className="coursetext">
                  <span className="Acourses">Status :</span>Open
                </h6>
                <h6 className="coursetext">
                  <span className="Acourses">RollNoStart :</span> 10000
                </h6>
                <h6 className="coursetext">
                  <span className="Acourses">RollNoSequence :</span>10005
                </h6>

                <h6>
                  <span className="coursetext Acourses">Timings</span>
                </h6>
                {this.state.Timings.map((v, i) => {
                  return (
                    <div key={i}>
                      <span className="coursetime">
                        {i}: {v}
                      </span>
                    </div>
                  );
                })}
                <br />
                <h6>
                  <span className="coursetext Acourses">Instructions</span>
                </h6>
                {this.state.Instructions.map((v, i) => {
                  return (
                    <div key={i}>
                      <span className="coursetime">
                        {i}: {v}
                      </span>
                    </div>
                  );
                })}

                <br />
                <div className="custom-control custom-switch Acoursedit">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customSwitches"
                    onChange={() => this.click()}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customSwitches"
                  >
                    <span className="Acourses">
                      Toggle This Switch For Course Open
                    </span>
                  </label>
                  <span className="edit-delete">
                    <Fab
                      // onClick={() => this.toggle()}
                      size="small"
                      color="primary"
                      aria-label="edit"
                    >
                      <EditIcon />
                    </Fab>
                  </span>
                </div>
              </div>
            </div>


            <br/>
            <div className="card">
              <div className="card-body">
                <h4 className="card-title coursetext">
                  <span className="Acourses">CourseName :</span> Mobile App And
                  Web Development
                </h4>
                <h6 className="coursetext">
                  <span className="Acourses">Status :</span>Open
                </h6>
                <h6 className="coursetext">
                  <span className="Acourses">RollNoStart :</span> 10000
                </h6>
                <h6 className="coursetext">
                  <span className="Acourses">RollNoSequence :</span>10005
                </h6>

                <h6>
                  <span className="coursetext Acourses">Timings</span>
                </h6>
                {this.state.Timings.map((v, i) => {
                  return (
                    <div key={i}>
                      <span className="coursetime">
                        {i}: {v}
                      </span>
                    </div>
                  );
                })}
                <br />
                <h6>
                  <span className="coursetext Acourses">Instructions</span>
                </h6>
                {this.state.Instructions.map((v, i) => {
                  return (
                    <div key={i}>
                      <span className="coursetime">
                        {i}: {v}
                      </span>
                    </div>
                  );
                })}

                <br />
                <div className="custom-control custom-switch Acoursedit">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customSwitches"
                    onChange={() => this.click()}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customSwitches"
                  >
                    <span className="Acourses">
                      Toggle This Switch For Course Open
                    </span>
                  </label>
                  <span className="edit-delete">
                    <Fab
                      // onClick={() => this.toggle()}
                      size="small"
                      color="primary"
                      aria-label="edit"
                    >
                      <EditIcon />
                    </Fab>
                  </span>
                </div>
              </div>
            </div>
          </MDBCol>
        </div>
      </Dashboard>
    );
  }
}

export default Availablecourses;

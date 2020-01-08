import React from "react";
import Dashboard from "../../Components/Dashboard/Dashboard";
import Input from "../../Components/Input/Input";
import Button from "../../Components/SBbutton/SBbutton";
import Radio from "../../Components/Radio/Radio";
import DropDown from "../../Components/DropDown/DropDown";

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

import "./Addcourses.css";

class Addcourses extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <Dashboard>
        <div className="main">
          <h1 className="hedingcourse">
            <b>Add Courses </b>
          </h1>
          <br />
          <div className="Input">
            <MDBCol className="col-sm-12 col-md-6 col-lg-12">
              <Input
                type="text"
                label="Course Name"
                onChange={e => this.setState({ coursename: e.target.value })}
              />
              <Input
                type="text"
                label="Status"
                onChange={e => this.setState({ status: e.target.value })}
              />
              <Input
                type="Number"
                label="Roll Number Start"
                onChange={e => this.setState({ number: e.target.value })}
              />
              <DropDown
                // onChange={a => this.Text(a, "Course")}
                name="Select Course Timing"
                options={[
                  "Select",
                  "Monday Tuesday and Wednesday",
                  "Thursday Tuesday and Wednesday",
                  "friday Tuesday and Wednesday"
                ]}
              />
              <br />
              <Radio name="CourseOpen" onChange={a => this.Text(a, "course")} />
              <br />
              <Button name="Submit" />
            </MDBCol>
          </div>
        </div>
      </Dashboard>
    );
  }
}

export default Addcourses;

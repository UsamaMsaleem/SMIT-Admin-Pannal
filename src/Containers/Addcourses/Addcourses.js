import React from "react";
import Dashboard from "../../Components/Dashboard/Dashboard";
import Input from "../../Components/Input/Input";
import Button from "../../Components/SBbutton/SBbutton";
import Radio from "../../Components/Radio/Radio";
import DropDown from "../../Components/DropDown/DropDown";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import "./Addcourses.css";
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

class Addcourses extends React.Component {
  constructor() {
    super();

    this.state = {
      Timing: "",
      courseTiming: [],
      isactive:false,
      editTiming:""
    };
  }

  Add() {
    const courseTiming = this.state.courseTiming;
    courseTiming.push(this.state.Timing);
    this.setState({
      courseTiming,
      Timing: ""
    });
  }
  delete(i) {
    const courseTiming = this.state.courseTiming;
    courseTiming.splice(i, 1);
    this.setState({ courseTiming: this.state.courseTiming });
  }

  toggle(i){
    this.setState({
      isactive: true,
      index:i,
    });
  }

  edit() {
    this.state.courseTiming[this.state.index] = this.state.editTiming;
    this.setState({
      courseTiming: this.state.courseTiming,
      editTiming:"",
      isactive: false,
    });
  }
  // edit(i) {
  //   var newdata = prompt(i);
  //   var index = i;
  //   this.state.courseTiming[index] = newdata;
  //   this.setState({
  //     courseTiming: this.state.courseTiming
  //   });
  // }

  render() {
    console.log(this.state.courseTiming);
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
              <Input
                type="Number"
                label="Roll Number Start"
                onChange={e => this.setState({ number: e.target.value })}
              />
              <div className="md-form input-group mb-3">
                <input
                  value={this.state.Timing}
                  placeholder="Add Course Timing"
                  type="text"
                  onChange={e => this.setState({ Timing: e.target.value })}
                  className="form-control"
                />
                <div className="input-group-append">
                  <Fab
                    onClick={this.Add.bind(this)}
                    className="button"
                    color="primary"
                    aria-label="add"
                  >
                    <AddIcon />
                  </Fab>
                </div>
              </div>
              {this.state.isactive && (
                <div className="md-form input-group mb-3">
                  <input
                    value={this.state.editTiming}
                    placeholder="Edit Course Timing"
                    type="text"
                    onChange={e => this.setState({ editTiming: e.target.value })}
                    className="form-control"
                  />
                  <div className="input-group-append">
                    <Fab
                      onClick={this.edit.bind(this)}
                      className="button"
                      color="primary"
                      aria-label="edit"
                    >
                    Edit
                    </Fab>
                  </div>
                </div>
              )}
              {this.state.courseTiming.map((v, i) => {
                return (
                  <div className="timings" key={i}>
                    <span>{v}</span>
                    <span className="edit-delete">
                      <Fab
                        onClick={() => this.toggle(i)}
                        size="small"
                        color="primary"
                        aria-label="edit"
                      >
                        <EditIcon />
                      </Fab>
                      &nbsp;&nbsp;
                      <Fab
                        onClick={() => this.delete(i)}
                        size="small"
                        color="secondary"
                        aria-label="edit"
                      >
                        <DeleteIcon />
                      </Fab>
                    </span>
                  </div>
                );
              })}
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

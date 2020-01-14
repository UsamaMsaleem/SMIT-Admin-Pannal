import React from "react";
import Dashboard from "../../Components/Dashboard/Dashboard";
import EditIcon from "@material-ui/icons/Edit";
import Fab from "@material-ui/core/Fab";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
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
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

class Availablecourses extends React.Component {
  constructor() {
    super();
    this.state = {
      viewmore: false,
      open: false,
      setOpen: false,
      Timing: "",
      courseTiming: [],
      instruction: "",
      instructionAdd: [],
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

  // click() {
  //   if (this.state.open === false) {
  //     this.setState({
  //       open: true
  //     });
  //   } else {
  //     this.setState({
  //       open: false
  //     });
  //   }
  // }

  handleClickOpen() {
    this.setState({
      open: true
    });
  }
  handleClose() {
    this.setState({
      open: false
    });
  }

  ViewmoreOpen() {
    this.setState({
      viewmore: true
    });
  }
  ViewmoreClose() {
    this.setState({
      viewmore: false
    });
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
  instructionAdd() {
    const instructionAdd = this.state.instructionAdd;
    instructionAdd.push(this.state.instruction);
    this.setState({
      instructionAdd,
      instruction: ""
    });
  }
  instructiondelete(i) {
    const instructionAdd = this.state.instructionAdd;
    instructionAdd.splice(i, 1);
    this.setState({ instructionAdd: this.state.instructionAdd });
  }

  render() {
    return (
      <Paper elevation={3}>
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
                    <span className="Acourses">CourseName :</span> Mobile App
                    And Web Development
                  </h4>
                  <h6 className="coursetext">
                    <span className="Acourses">Status :</span>Open
                  </h6>
                  <h6 className="coursetext">
                    <span className="Acourses">RollNoStart :</span> 10000
                  </h6>
                  {/* <h6 className="coursetext">
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
                  })} */}

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
                        onClick={this.handleClickOpen.bind(this)}
                        size="small"
                        color="primary"
                        aria-label="edit"
                      >
                        <EditIcon />
                      </Fab>
                      <Button
                        onClick={this.ViewmoreOpen.bind(this)}
                        color="primary"
                      >
                        View More
                      </Button>
                    </span>
                  </div>
                </div>
              </div>
            </MDBCol>

            {/* //popup coding for view more// */}

            <Dialog
              open={this.state.viewmore}
              TransitionComponent={Transition}
              keepMounted
              onClose={this.handleClose.bind(this)}
              aria-labelledby="alert-dialog-slide-title"
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle id="alert-dialog-slide-title">
                {"View Your Course"}
              </DialogTitle>
              <DialogContent>
                <span className="Acourses">CourseName :</span> Mobile App And
                Web Development
                <br />
                <span className="Acourses">Status :</span> Open
                <br />
                <span className="Acourses">RollNoStart :</span> 100001
                <br />
                <span className="Acourses">RollNoSequence :</span> 100001
                <br />
                <br />

                <span className="Acourses">Timings</span> 
                {this.state.Timings.map((v, i) => {
                  return (
                    <div key={i}>
                      <span>
                        {i}: {v}
                      </span>
                    </div>
                  );
                })}
                <br />
                <span className="Acourses">Instruction</span> 
                {this.state.Instructions.map((v, i) => {
                  return (
                    <div key={i}>
                      <span>
                        {i}: {v}
                      </span>
                    </div>
                  );
                })}
              </DialogContent>
              <DialogActions>
                <Button onClick={this.ViewmoreClose.bind(this)} color="primary">
                  Agree
                </Button>
              </DialogActions>
            </Dialog>

            {/* //popup coding for editing course// */}
            <Dialog
              open={this.state.open}
              TransitionComponent={Transition}
              keepMounted
              onClose={this.handleClose.bind(this)}
              aria-labelledby="alert-dialog-slide-title"
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle id="alert-dialog-slide-title">
                {"Edit Your Course"}
              </DialogTitle>
              <DialogContent>
                <TextField
                  style={{ marginTop: "10px" }}
                  id="CourseName"
                  label="Course Name"
                  type="text"
                  onChange={e => this.setState({ courseName: e.target.value })}
                  fullWidth
                />
                <TextField
                  style={{ marginTop: "10px" }}
                  id="Status"
                  label="Status"
                  type="text"
                  onChange={e => this.setState({ status: e.target.value })}
                  fullWidth
                />
                <TextField
                  style={{ marginTop: "10px" }}
                  id="rollNo"
                  label="RollNo Start"
                  type="number"
                  onChange={e => this.setState({ rollnoStart: e.target.value })}
                  fullWidth
                />
                {/* //Timing// */}
                <span>
                  <TextField
                    style={{ marginTop: "10px" }}
                    value={this.state.Timing}
                    id="CourseTiming"
                    label="Course Timing"
                    type="text"
                    onChange={e => this.setState({ Timing: e.target.value })}
                    fullWidth
                  />
                  <Button
                    style={{ float: "right" }}
                    onClick={this.Add.bind(this)}
                    color="primary"
                  >
                    Add
                  </Button>
                </span>
                {this.state.courseTiming.map((v, i) => {
                  return (
                    <div key={i}>
                      <span style={{ marginTop: "2px" }}>{v}</span>
                      <span className="edit-delete">
                        <Button
                          className="delete"
                          onClick={() => this.delete(i)}
                          color="secondary"
                        >
                          delete
                        </Button>
                      </span>
                    </div>
                  );
                })}
                {/* //Instruction// */}
                <span>
                  <TextField
                    style={{ marginTop: "10px" }}
                    value={this.state.instruction}
                    id="Instruction"
                    label="Instruction"
                    type="text"
                    onChange={e =>
                      this.setState({ instruction: e.target.value })
                    }
                    fullWidth
                  />
                  <Button
                    style={{ float: "right" }}
                    onClick={this.instructionAdd.bind(this)}
                    color="primary"
                  >
                    Add
                  </Button>
                </span>
                {this.state.instructionAdd.map((v, i) => {
                  return (
                    <div style={{ marginTop: "2px" }} key={i}>
                      <span style={{ marginTop: "2px" }}>{v}</span>
                      <span className="edit-delete">
                        <Button
                          className="delete"
                          onClick={() => this.instructiondelete(i)}
                          color="secondary"
                        >
                          delete
                        </Button>
                      </span>
                    </div>
                  );
                })}
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose.bind(this)} color="primary">
                  Disagree
                </Button>
                <Button onClick={this.handleClose.bind(this)} color="primary">
                  Agree
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </Dashboard>
      </Paper>
    );
  }
}

export default Availablecourses;

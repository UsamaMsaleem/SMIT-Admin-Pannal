import React from 'react';
import './Registered.css';
import { MDBInput, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact'
import { Button } from 'reactstrap';
import Dashboard from '../../Components/Dashboard/Dashboard';


class Registeredstudent extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
     <Dashboard>
      <div className="main">
        <h1 className="hedingResult"><b> Registered Students </b></h1>
        <br />
        <MDBInput style={{ width: '55%', margin: "auto" }} type="text" onChange={() => console.log("a")} />

        <Button id="registerdbutton" style={{ textAlign: "center", backgroundImage: 'linear-gradient(270deg,#282262,#18459b)' }} size="lg">Search</Button>

        <br />
        <br />
        <MDBTable style={{ width: '55%', margin: "auto" }}>
          <MDBTableHead style={{ backgroundImage: 'linear-gradient(270deg,#282262,#18459b)', color: 'white' }}>
            <tr>
              <th>RollNo</th>
              <th>Name</th>
              <th>FatherName</th>
              <th>Marks</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </MDBTableBody>
        </MDBTable>
        <br />
      </div>
      </Dashboard>
    )
  }
}

export default Registeredstudent;
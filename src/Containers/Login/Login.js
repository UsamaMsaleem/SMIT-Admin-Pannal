import React from 'react';
import './Login.css';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBModalFooter } from 'mdbreact';
import LOGO from '../../Assets/logo.jpg';




class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        const { } = this.state
        return (
            <div>
                <MDBContainer>
                    <MDBRow className="Main">
                        <MDBCol md="4">
                            <MDBCard >
                                <MDBCardBody className="mx-4 card">
                                    <div className="text-center">
                                        <img src={LOGO} className="main-logo" alt="LOGO" />

                                        <h1 className="headinglogin"><b>Admin Login</b></h1>

                                    </div>

                                    <Input type="text" label="Email Adress" onChange={console.log("error")} />
                                    <Input type="password" label="Password" onChange={console.log("error")} />

                                    <div className="text-center mb-3">
                                        <Button name={"Login"} onClick={() => this.props.history.push("/dashboard")}></Button>
                                        {this.state.Loading && <div className="spinner-border text-primary" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>}
                                    </div>
                                </MDBCardBody>
                                <MDBModalFooter className="mx-5 pt-3 mb-1">
                                    <p style={{ color: "#282262" }} className="font-small d-flex justify-content-end">
                                        click here to
                    {/* <Link to="/Signup">Signup</Link> */}
                                    </p>
                                </MDBModalFooter>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        )
    }
}

export default Login;
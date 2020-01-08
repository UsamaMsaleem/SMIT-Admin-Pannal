import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBBtn } from "mdbreact";
import '../Style.css';
class Button extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <div className="autos">
                    <div>
                        <MDBBtn style={{ color: "white", backgroundImage: 'linear-gradient(270deg,#282262,#18459b)' }}
                            onClick={this.props.onClick}
                            type="button"
                            gradient="linear-gradient(270deg,#282262,#18459b)"
                            rounded
                            className="btn-block z-depth-1a"
                        >
                            {this.props.name}
                        </MDBBtn>
                    </div>
                </div>
            </div>
        )
    }
}

export default Button;
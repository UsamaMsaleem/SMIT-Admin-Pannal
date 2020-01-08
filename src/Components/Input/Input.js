import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBInput } from "mdbreact";
import '../Style.css';
class Input extends React.Component {
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
                        <MDBInput type={this.props.type} label={this.props.label} onChange={this.props.onChange} />

                    </div>
                </div>
            </div>
        )
    }
}

export default Input;
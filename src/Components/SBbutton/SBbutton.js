import React from 'react';
import '../Style.css';
import MDButton from '@material-ui/core/Button';


class SBbutton extends React.Component {
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
                    <MDButton  onClick={this.props.onClick} style={{width: "auto",backgroundImage: 'linear-gradient(270deg,#282262,#18459b)',color:"white" }} variant="outlined" component="span"  size="large">{this.props.name}</MDButton>
                    </div>
                </div>
            </div>
        )
    }
}

export default SBbutton;
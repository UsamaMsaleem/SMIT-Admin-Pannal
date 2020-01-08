import React from 'react';
import '../Style.css';

class Radio extends React.Component {
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
                        <label style={{ color: "#282262", fontWeight: "bold" }}>{this.props.name}:</label>
                        <label className="radio-inline">
                            <input onChange={this.props.onChange} onBlur={this.props.onBlur} type="radio" name="optradio" value="true" />True
                        </label>
                        <label className="radio-inline">
                            <input onChange={this.props.onChange} onBlur={this.props.onBlur} type="radio" name="optradio" value="false" />False
                        </label>
                        <br />
                        {this.props.error === true ?
                            <small style={{ color: "red" }}>{this.props.errorMessage}</small>
                            : <small></small>

                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Radio;
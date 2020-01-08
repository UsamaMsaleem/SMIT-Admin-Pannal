import React from 'react';
import '../Style.css';
class DropDown extends React.Component {
    constructor() {
        super()
        this.state = {
            success: {
                padding: "10px",
                width: "100%",
                borderRadius: "3px",
                border: "1px solid lightGray",
                height: "45px"
            },
            error: {
                padding: "10px",
                width: "90%",
                borderRadius: "3px",
                border: "1px solid red",
                height: "45px"
            },
        }
    }
    render() {
        return (
            <div>
                <div className="autos">
                    <div>
                        <label style={{ color: "#282262", fontWeight: "bold" }}>{this.props.name}:</label>
                        <br />
                        {this.props.error === true ?
                            <select onBlur={this.props.onBlur} onChange={this.props.onChange} style={this.state.error}>
                                {this.props.options.map((v, i) => {
                                    return <option key={i}>{v}</option>
                                })
                                }
                            </select>
                            : <select onBlur={this.props.onBlur} onChange={this.props.onChange} style={this.state.success}>
                                {this.props.options.map((v, i) => {
                                    return <option key={i}>{v}</option>
                                })
                                }
                            </select>

                        }
                        <br />
                        {/* <small style={{ color: "red" }}>{this.props.errorMessage}</small> */}
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

export default DropDown;
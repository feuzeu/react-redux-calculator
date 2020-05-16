import React, { Component } from 'react';

class Display extends Component {
    render() {
        return (
        <div className="display">{this.props.expression}</div>
        );
    }
}

export default Display;

import React, { Component } from 'react';

class Display extends Component {
    render() {
        return (
        <div className="display">
            {this.props.expression.toString().split(' ').reverse().join(' ')}
        </div>
        );
    }
}

export default Display;

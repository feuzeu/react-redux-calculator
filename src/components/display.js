import React, { Component } from 'react';

class Display extends Component {
    componentDidUpdate() {
        this.props.updateHistory(this.props.expression);
    }

    render() {
        return (
        <div className="display">
            {this.props.expression.toString().split(' ').reverse().join(' ')}
        </div>
        );
    }
}

export default Display;

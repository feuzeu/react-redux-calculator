import React, { Component } from 'react';
import Button from './button';

class ControlPanel extends Component {
    render() {
        return (
            <section className="buttons--controls">
                <Button
                    buttonClass="control"
                    text="&larr;"
                    clickHandler={() => this.props.chopExpression()}/>
                <Button
                    buttonClass="control"
                    text="c"
                    clickHandler={() => this.props.resetExpression()}/>
                <Button
                    buttonClass="control"
                    text="history"
                    clickHandler={() => this.props.toggleHistory()}/>
            </section>
        )
    }
}

export default ControlPanel;

import React, { Component } from 'react';
import Button from './button';

class ControlPanel extends Component {
    removeOneChar() {
        const curExpression = String(this.props.expression).trim();
        const newExpWithRemovedChar = curExpression.substring(0, (curExpression.length - 1)).trim();

        this.props.updateExpression(newExpWithRemovedChar === '' ? 0 : newExpWithRemovedChar);
    }

    render() {
        return (
            <section className="buttons--controls">
                <Button buttonClass="control" text="&larr;" clickHandler={() => this.removeOneChar()}/>
                <Button buttonClass="control" text="c" clickHandler={() => this.props.resetExpression()}/>
                <Button buttonClass="control" text="history" clickHandler={() => this.props.toggleHistory()}/>
            </section>
        )
    }
}

export default ControlPanel;

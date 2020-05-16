import React, { Component } from 'react';
import Button from './button';

class History extends Component {
    render() {
        return (
            <section className={`history ${this.props.history.show ? 'visible' : ''}`}>
                <Button
                    text="+"
                    buttonClass="toggle-close"
                    clickHandler={() => this.props.toggleHistory()}/>
                {this.props.history.items.map((expression, i) => (
                    <Button
                        key={i}
                        buttonClass="block transparent"
                        text={expression}
                        clickHandler={() => this.props.setExpression(expression)}/>
                ))}
            </section>
        )
    }
}

export default History;

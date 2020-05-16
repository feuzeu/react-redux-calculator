import React, { Component } from 'react';
import Button from './button';

class History extends Component {
    historyItemClickHandler(history) {
        this.props.updateExpression(history);
        this.props.toggleHistory();
    }

    render() {
        return (
            <section className={`history ${this.props.history.show ? 'visible' : ''}`}>
                <Button text="+" clickHandler={() => this.props.toggleHistory()} buttonClass="toggle-close"/>
                {this.props.history.items.map((mem, i) => (
                    <Button key={i} buttonClass="block transparent"
                            text={mem} clickHandler={() => this.historyItemClickHandler(mem)}/>
                ))}
            </section>
        )
    }
}

export default History;

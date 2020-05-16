import React, { Component } from 'react';
import Button from './button';

class Digits extends Component {
    digitClickHandler = (number) => {
        if (this.props.expression === '0' || this.props.expression === 0) {
            this.props.updateExpression(number);
        } else {
            this.props.updateExpression(`${this.props.expression}${number}`);
        }
    }

    render() {
        return (
            <section className="buttons--digits">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
                .map(number => <Button key={number} text={number} clickHandler={() => this.digitClickHandler(number)}/>)}
            </section>
        );
    }
}

export default Digits;

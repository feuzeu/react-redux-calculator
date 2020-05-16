import React, { Component } from 'react';
import Button from './button';

class Operators extends Component {
    operatorClickHandler(operator) {
        this.props.updateExpression(`${this.props.expression} ${operator} `);
    }

    calculateExpression() {
        /* eslint-disable */
        // This rule is important in production apps!
        // Read more: https://eslint.org/docs/rules/no-eval
        // To simplify the functionality in this course we use eval
        const calcFunc = eval;
        /* eslint-enable */
        try {
            // store.newExpression = calcFunc(store.curExpression);
            let newExpression = calcFunc(this.props.expression);
            this.props.updateExpression(newExpression);
        } catch (e) {
            console.error("Error: Incorrect Expression of digits & operators :(")
        }
    }

    render() {
        return (
            <section className="buttons--operators">
                {["+", "-", "*", "/"]
                    .map((operator, i) => (
                        <Button key={i} text={operator} clickHandler={() => this.operatorClickHandler(operator)}/>)
                    )}
                <Button text="=" clickHandler={() => this.calculateExpression()}/>
            </section>
        )
    }
}

export default Operators;

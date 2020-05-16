import React, { Component } from 'react';
import Button from './button';

class Operators extends Component {
    render() {
        return (
            <section className="buttons--operators">
                {["+", "-", "*", "/"]
                    .map((operator, i) => (
                        <Button
                            key={i}
                            text={operator}
                            clickHandler={() => this.props.appendOperator(operator)}/>)
                    )}
                <Button
                    text="="
                    clickHandler={() => this.props.evalExpression()}/>
            </section>
        )
    }
}

export default Operators;

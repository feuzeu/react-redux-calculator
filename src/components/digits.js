import React, { Component } from 'react';
import Button from './button';

class Digits extends Component {
    render() {
        return (
            <section className="buttons--digits">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
                .map(number => <Button
                    key={number}
                    text={number}
                    clickHandler={() => this.props.appendDigit(number)}/>)}
            </section>
        );
    }
}

export default Digits;

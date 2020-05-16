import React, { Component } from 'react';
import './Calculator.css';
import Digits from './containers/digits';
import Operators from './containers/operators';
import History from './containers/history';
import Display from './containers/display';
import ControlPanel from './containers/panel';

class Calculator extends Component {
    render() {
         return (
            <main className="react-calculator">
                <Display />
                <ControlPanel />
                <Digits />
                <Operators />
                <History />
            </main>
        )
    }
}

export default Calculator;

import React, { Component } from 'react';
import './Calculator.css';
import Digits from './components/digits';
import Operators from './components/operators';
import History from './components/history';
import Display from './components/display';
import ControlPanel from './components/panel';

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

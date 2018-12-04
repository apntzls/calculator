import "./Calculator.scss"
import { connect } from "react-redux";
import React, { Component } from 'react';
import {
    calculate,
    clear,
    operatorSelected,
    retrieveMemory,
    selection,
    storeMemory
} from '../../reducers/Calculator.reducer';

class Calculator extends Component {
    render() {
        const { 
            calculateDispatch,
            clearDispatch,
            display, 
            operatorSelectedDispatch,
            retrieveMemoryDispatch,
            selectionDispatch,
            storeMemoryDispatch,
        } = this.props;

        function selectionHandler(selection) {
            return () => selectionDispatch(selection);
        }

        function operatorHandler(operator) {
            return () => operatorSelectedDispatch(operator);
        }

        return (
            <section className="component-calculator">
                <div className="display">{display}</div>
                <div className="number-pad">
                    <div className="number-pad-row">
                        <div className="button" onClick={clearDispatch}>C</div>
                        <div className="button" onClick={storeMemoryDispatch}>MS</div>
                        <div className="button" onClick={retrieveMemoryDispatch}>MR</div>
                        <div className="button" onClick={operatorHandler('/')}>/</div>
                    </div>
                    <div className="number-pad-row">
                        <div className="button" onClick={selectionHandler('8')}>8</div>
                        <div className="button" onClick={selectionHandler('7')}>7</div>
                        <div className="button" onClick={selectionHandler('9')}>9</div>
                        <div className="button" onClick={operatorHandler('*')}>X</div>
                    </div>
                    <div className="number-pad-row">
                        <div className="button" onClick={selectionHandler('6')}>6</div>
                        <div className="button" onClick={selectionHandler('5')}>5</div>
                        <div className="button" onClick={selectionHandler('4')}>4</div>
                        <div className="button" onClick={operatorHandler('-')}>-</div>
                    </div>
                    <div className="number-pad-row">
                        <div className="button" onClick={selectionHandler('3')}>3</div>
                        <div className="button" onClick={selectionHandler('2')}>2</div>
                        <div className="button" onClick={selectionHandler('1')}>1</div>
                        <div className="button" onClick={operatorHandler('+')}>+</div>
                    </div>
                    <div className="number-pad-row">
                        <div className="button" onClick={selectionHandler('0')}>0</div>
                        <div className="button empty"></div>
                        <div className="button empty"></div>
                        <div className="button" onClick={calculateDispatch}>=</div>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        display: state.calc.display
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        calculateDispatch: () => dispatch(calculate()),
        clearDispatch: () => dispatch(clear()),
        operatorSelectedDispatch: (operator) => dispatch(operatorSelected(operator)),
        retrieveMemoryDispatch: () => dispatch(retrieveMemory()),
        selectionDispatch: (value) => dispatch(selection(value)),
        storeMemoryDispatch: () => dispatch(storeMemory())
    }
}

const connected = connect(mapStateToProps, mapDispatchToProps)(Calculator);

export default connected;
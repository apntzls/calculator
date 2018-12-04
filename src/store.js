import { combineReducers, createStore } from 'redux';
import calculatorReducer from './reducers/Calculator.reducer'

const rootReducer = combineReducers({
    calc: calculatorReducer
});

export default createStore(
    rootReducer
);

const initialState = {
    display: '',
    memory: undefined,
    num1: undefined,
    operator: undefined
};

const CALCULATE = 'CALCULATE';
const CLEAR = 'CLEAR';
const MEMORY_RETRIVAL = 'MEMORY_RETRIVAL';
const MEMORY_STORAGE = 'MEMORY_STORAGE';
const OPERATOR = 'OPERATOR';
const SELECTION = 'SELECTION';

export const calculate = () => ({ type: CALCULATE });
export const clear = () => ({ type: CLEAR });
export const operatorSelected = (operator) => ({ type: OPERATOR, payload: operator });
export const retrieveMemory = () => ({ type: MEMORY_RETRIVAL });
export const selection = (selection) => ({ type: SELECTION, payload: selection });
export const storeMemory = () => ({ type: MEMORY_STORAGE });

export default (state = initialState, action) => {
    const mergeState = (newState) => Object.assign({}, state, newState);

    switch (action.type) {
        case CALCULATE: {
            const num1 = state.num1;
            const num2 = Number(state.display);
            let value;

            switch (state.operator) {
                case '+':
                    value = num1 + num2;
                    break;
                case '-':
                    value = num1 - num2; 
                    break;
                case '/':
                    value = num1 / num2;
                    break;
                case '*':
                    value = num1 * num2;
                    break;
                default: value = '';
            }

            return mergeState({
                display: String(value),
                num1: undefined,
                operator: undefined
            });
        }
        case CLEAR:
            return mergeState({
                display: '',
                num1: undefined,
                operator: undefined
            });
        case MEMORY_RETRIVAL: {
            const display = state.memory ? String(state.memory) : '';
            return mergeState({ display });
        }
        case MEMORY_STORAGE:
            return mergeState({ memory: Number(state.display) });
        case OPERATOR: {
            if (state.operator || !state.display.length) {
                return state;
            } else {
                return mergeState({ 
                    display: '',
                    operator: action.payload,
                    num1: Number(state.display)
                });
            }
        }
        case SELECTION:
            return mergeState({
                display: state.display.concat(action.payload)
            });
        default:
            return state
    }
}
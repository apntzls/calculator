import reducer, { calculate, clear, retrieveMemory, selection, storeMemory } from './Calculator.reducer';

describe('Calculator reducer', () => {
    it('should sum two numbers', () => {
        const state = {
            display: '5',
            num1: 5,
            operator: '+'
        };
        const expectedState = {
            display: '10',
            num1: undefined,
            operator: undefined
        }
        const newState = reducer(state, calculate());
        expect(newState).toEqual(expectedState);
    });

    it('should subtract two numbers', () => {
        const state = {
            display: '5',
            num1: 10,
            operator: '-'
        };
        const expectedState = {
            display: '5',
            num1: undefined,
            operator: undefined
        }
        const newState = reducer(state, calculate());
        expect(newState).toEqual(expectedState);
    });

    it('should divide two numbers', () => {
        const state = {
            display: '2',
            num1: 10,
            operator: '/'
        };
        const expectedState = {
            display: '5',
            num1: undefined,
            operator: undefined
        }
        const newState = reducer(state, calculate());
        expect(newState).toEqual(expectedState);
    });

    it('should multiply two numbers', () => {
        const state = {
            display: '5',
            num1: 2,
            operator: '*'
        };
        const expectedState = {
            display: '10',
            num1: undefined,
            operator: undefined
        }
        const newState = reducer(state, calculate());
        expect(newState).toEqual(expectedState);
    });

    it('should store number in memory', () => {
        const state = {
            display: '5',
            memory: undefined
        };
        const expectedState = {
            display: '5',
            memory: 5
        }
        const newState = reducer(state, storeMemory());
        expect(newState).toEqual(expectedState);
    });

    it('should retrieve number in memory', () => {
        const state = {
            display: '',
            memory: 5
        };
        const expectedState = {
            display: '5',
            memory: 5
        }
        const newState = reducer(state, retrieveMemory());
        expect(newState).toEqual(expectedState);
    });

    it('should clear state', () => {
        const state = {
            display: '10',
            memory: 45,
            num1: 6,
            operator: '*'
        };
        const expectedState = {
            display: '',
            memory: 45,
            num1: undefined,
            operator: undefined
        }
        const newState = reducer(state, clear());
        expect(newState).toEqual(expectedState);
    });

    it('should set number selection', () => {
        const state = {
            display: '',
        };
        const expectedState = {
            display: '9',
        }
        const newState = reducer(state, selection('9'));
        expect(newState).toEqual(expectedState);
    });
})
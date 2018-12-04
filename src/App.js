import './App.scss';
import { Provider } from 'react-redux'
import Calculator from './components/Calculator'
import store from './store';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Calculator />
        </div>
      </Provider>
    );
  }
}

export default App;

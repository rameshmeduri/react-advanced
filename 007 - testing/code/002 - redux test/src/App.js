import React, { Component } from 'react';
import CounterApp from './Counter'
import { Provider } from 'react-redux'
import store from './store'

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <CounterApp/>
        </Provider>
    )
  }
}

export default App;

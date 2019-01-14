import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store';

import ViewMovies from './components/view-movies';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ViewMovies />
      </Provider>
    );
  }
}

export default App;

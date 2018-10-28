import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Post from './components/Post';

class App extends Component {
  render() {
    return (
      <Provider store = { store }>
        <div>
          <h1>Alokkk</h1>
          <Post />
        </div>
      </Provider>
    );
  }
}

export default App;

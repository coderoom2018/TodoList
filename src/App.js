import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import TodoList from './components/TodoList/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="myTitle">
          TodoList
        </div>
        <div className="myContents">
          <NavBar />
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;

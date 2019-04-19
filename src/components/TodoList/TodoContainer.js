import React, { Component } from 'react';
import './TodoContainer.css';
import Todo from './Todo';

export default class TodoContainer extends Component {
  render() {
    return (
      <div className="todoContainer_content">
        <div className="todoContainer_title">TodoContainer</div>
        <div className="todoContainer_list">
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
        </div>
      </div>
    )
  }
}

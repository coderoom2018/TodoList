import React, { Component } from 'react';
import './TodoList.css';
import TodoContainer from './TodoContainer';
import AddTodoBtn from './AddTodoBtn';

export default class TodoList extends Component {
  render() {
    return (
      <div className="todoList_content">
        <div className="todoList_header">
          <div className="todoList_title">TodoList</div>
          <AddTodoBtn />
        </div>
        <TodoContainer />
      </div>
    )
  }
}

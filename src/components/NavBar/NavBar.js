import React, { Component } from 'react'
import './NavBar.css'
import './CategoriesContainer';
import CategoriesContainer from './CategoriesContainer';
import AddCategoryBtn from './AddCategoryBtn';

export default class NavBar extends Component {
  render() {
    return (
      <div className="navBar_content">
        <div className="navBar_title">NavBar</div>
        <div className="navBar_main">
          <div className="navBar_list">
            <CategoriesContainer />
          </div>
          <AddCategoryBtn />
        </div>
      </div>
    )
  }
}

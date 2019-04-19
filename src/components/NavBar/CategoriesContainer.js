import React, { Component } from 'react';
import './CategoriesContainer.css';
import Categories from './Categories';

export default class CategoriesContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="categoriesContainer_content">
        <div className="categoriesContainer_title">CategoriesContainer</div>
        <div className="categoriesConatainer_list">
          <Categories />
          <Categories />
          <Categories />
          <Categories />
          <Categories />
          <Categories />
        </div>
      </div>
    )
  }
}

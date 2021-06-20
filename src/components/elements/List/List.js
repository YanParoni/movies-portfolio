import React, { Component } from 'react';
import './List.css';
import LikeIndicator from'../LikeIndicator/LikeIndicator';

export default class List extends Component {
  render() {
    const { header, loading, children ,id,vote} = this.props;

    const renderElements = () => {
      const elements = children.map((element) => {
        return (
          <div key={element.id} className="flex flex-row flex-wrap w-1/5 rounded-3xl mr-10 mb-10">
            {element}
          </div>
        );
      });
      return elements;
    };

    return (
      <div className="box-row">
        
        {header && !loading ? <h1>{header}</h1> : null}
        
        <div className="flex flex-row flex-wrap p-4 justify-center ">
          
          {renderElements()}</div>
      </div>
    );
  }
}

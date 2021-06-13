import React, { Component } from 'react';
import './List.css';

export default class List extends Component {
  render() {
    const { header, loading, children ,id} = this.props;

    const renderElements = () => {
      const elements = children.map((element) => {
        return (
          <div key={element.id} className="box-row-element">
            {element}
          </div>
        );
      });
      return elements;
    };

    return (
      <div className="box-row">
        {header && !loading ? <h1>{header}</h1> : null}
        <div className="box-row-content">{renderElements()}</div>
      </div>
    );
  }
}

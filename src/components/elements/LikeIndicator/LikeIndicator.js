import React, { Component, Fragment } from 'react';

export default class LikeIndicator extends Component {
  render() {
    const { vote } = this.props;
    return (
      <Fragment>
        <img className="heart" src="./images/heart.svg" />
        <span className="vote">{vote}</span>
      </Fragment>
    );
  }
}

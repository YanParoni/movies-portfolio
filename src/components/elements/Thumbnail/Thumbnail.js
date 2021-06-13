import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Thumbnail.css';
import Wrapper from '../Wrapper/Wrapper';
import LikeIndicator from'../LikeIndicator/LikeIndicator';
import '../LikeIndicator/LikeIndicator.css';


export default class Thumbnail extends Component {
  render() {
    const { movieId, movieName, image, clickable, rating, vote } = this.props;

    return (
      <Fragment>
        <LikeIndicator vote={vote}/>
        <div className="moviethumb">
          {clickable ? (
            <Link
              to={{
                pathname: `/${movieId}`,
                movieName: `${movieName}`,
              }}
            >
              
              <section className="circle">
             
                <Wrapper
                  className="rating-circle"
                  radius={30}
                  stroke={4}
                  progress={rating * 9}
                />
                <span className="rating">{rating}</span>
              </section>
              <img className="clickable" src={image} alt="moviethumb" />
            </Link>
          ) : (
            <img src={image} alt="moviethumb" />
          )}
        </div>
      </Fragment>
    );
  }
}

Thumbnail.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  movieName: PropTypes.string,
};

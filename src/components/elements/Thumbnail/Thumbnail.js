import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Wrapper from '../Wrapper/Wrapper';
import LikeIndicator from '../LikeIndicator/LikeIndicator';
import '../LikeIndicator/LikeIndicator.css';

export default class Thumbnail extends Component {
  render() {
    const { movieId, movieName, image, clickable, rating, vote } =
      this.props;

    return (
      <Fragment>
        <div>
          {clickable ? (
            <Link
              to={{
                pathname: `/${movieId}`,
                movieName: `${movieName}`,
              }}
            >
               <div
                className="w-72 box-border  py-32 border-4 rounded-3xl transition shadow-2xl duration-700 ease-in-out  bg-black flex opacity-0 hover:opacity-100 backdrop-opacity-100  
             p-16 absolute self-center flex-row justify-center text-green pr-24 pb-52 border-yellow-500  bg-opacity-75 "
              >
                <span className="flex ml-6  mb-2.5 text-xl flex-row w-36  self-center  justify-center absolute  text-2xl text-white">
                  {vote}
                </span>
                <div className="flex-nowrap text-center ml-6 mt-32 absolute text-2xl text-white ">
                  {movieName}
                </div>

                <LikeIndicator className="ml-18" />
              </div>

              <section className="circle">
                <Wrapper
                  className="rating-circle"
                  radius={30}
                  stroke={4}
                  progress={rating * 9}
                  ratin={rating}
                />
              </section>
             

              <img
                className="w-72  rounded-3xl "
                src={image}
                alt="moviethumb"
              />
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

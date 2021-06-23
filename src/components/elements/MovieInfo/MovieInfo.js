import { imageUrl, backImageSize, poster } from '../../../configs';
import ActorList from '../ActorList/ActorList';
import React, { Component, Link, Fragment } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './MovieInfo.css';

export default class MovieInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { movie, directors, actor, trailer } = this.props;
    const { length } = directors;

    const Arrow = ({ text, className }) => {
      return <div className={className}>{text}</div>;
    };

    const ArrowLeft = Arrow({
      text: '<',
      className: 'text-white text-5xl ml-4',
    });
    const ArrowRight = Arrow({ text: '>', className: 'text-white text-5xl' });
    const { poster_path, title, overview, vote_average, imdb_id } = movie;
    const posterAct = 'w185';
    return (
      <Fragment>
        <div className="movieinfo">
          <div className="movieinfo-content">
            <div className="movieinfo-thumb">
              <img
                className="poster"
                src={
                  poster_path
                    ? `${imageUrl}w1280${poster_path}`
                    : './images/no_image.jpg'
                }
              />
            </div>
            <div className="movieinfo-text">
              <h1 className=" flex mb-48"> {title} </h1>
              <p className="flex mb-8 text-4x1"> PLOT </p>
              <p classname="flex mb-20"> {overview} </p>
              <iframe className='my-4'
                width="480"
                height="252"
                src={trailer}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <a href={`https://www.imdb.com/title/${imdb_id}`} target="_blank">
                <img
                  className="imdb flex mb-4"
                  src="./images/imdb.svg"
                  alt="imdb-logo"
                />
              </a>
              <div className="imdb-rating ">
                <meter
                  classname="  mb-28"
                  min="0"
                  max="100"
                  optimum="100"
                  low="40"
                  high="70"
                  value={vote_average * 10}
                />

                <h3 className="block mb-24 ">{vote_average}</h3>
              </div>
              {length > 1 ? (
                <h3 className="flex mb-8">DIRECTORS</h3>
              ) : (
                <h3>DIRECTOR</h3>
              )}{' '}
              {directors.map((element, index) => {
                return (
                  <h3 key={index} className="director">
                    {element.name}
                  </h3>
                );
              })}
            </div>
          </div>
        </div>

        <div>
          <ScrollMenu
            data={actor.map((el) => (
              <div
                className="flex-row shadow shadow-2xl pb-8 actor mt-20"
                key={el.id}
              >
                <img
                  className="flex  "
                  src={
                    el.profile_path
                      ? `${imageUrl}${posterAct}${el.profile_path}`
                      : './images/no_image.jpg'
                  }
                  alt="actor/actress-photo"
                />
                <strong className="flex ml-20 text-center mb-6 actor text-white">
                  {' '}
                  {el.name}{' '}
                </strong>
                <span className="flex ml-20 text-center actor mb-6 text-white">
                  {' '}
                  Plays {el.character}{' '}
                </span>
              </div>
            ))}
            arrowLeft={ArrowLeft}
            arrowRight={ArrowRight}
            dragging={true}
            wheel={false}
          />
        </div>
      </Fragment>
    );
  }
}

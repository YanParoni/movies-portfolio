import { imageUrl, backImageSize, poster } from '../../../configs';
import React, { Component, Link, Fragment } from 'react';
import './MovieInfo.css';

export default class MovieInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { movie, directors, actor } = this.props;
    const { length } = directors;
    const {
      backdrop_path,
      poster_path,
      title,
      overview,
      vote_average,
      imdb_id,
    } = movie;
    const posterAct = 'w185';
    return (
      <Fragment>
      <div className="movieinfo">
        <div className="movieinfo-content">
          <div className="movieinfo-thumb">
            <img className='rounded-3xl'
              src={
                poster_path
                  ? `${imageUrl}w1280${poster_path}`
                  : './images/no_image.jpg'
              }
            />
          </div>

          <div className="movieinfo-text">
            <h1> {title} </h1>
            <h2> PLOT </h2>
            <p> {overview} </p>
            <a href={`https://www.imdb.com/title/${imdb_id}`} target="_blank">
              <img className="imdb" src="./images/imdb.svg" alt="imdb-logo" />
            </a>
            <div className="imdb-rating">
              <meter
                min="0"
                max="100"
                optimum="100"
                low="40"
                high="70"
                value={vote_average * 10}
              />

              <p className="imdb-score">{vote_average}</p>
            </div>
            {length > 1 ? <h3>DIRECTORS</h3> : <h3>DIRECTOR</h3>}{' '}
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

<div className="actor flex  ">

{actor.map( el=>
<div className="flex-col mx-20 w-52 mb-10 mt-10" key={el.id} >
  <img
    classname="flex "
    src={
      el.profile_path
        ? `${imageUrl}${posterAct}${el.profile_path}`
        : './images/no_image.jpg'
    }
    alt="actor/actress-photo"
  />
  <strong className="flex ml-20 text-white">{el.name}</strong>
  <span className="flex ml-20 text-white">Plays {el.character}</span>
</div>)}


</div>
</Fragment>
    );
  }
}

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
            <h1 className=' flex mb-48'> {title} </h1>
            <p className='flex mb-8 text-4x1'> PLOT </p>
            <p classname='flex mb-20'> {overview} </p>
            <a href={`https://www.imdb.com/title/${imdb_id}`} target="_blank">
              <img className="imdb flex mb-4" src="./images/imdb.svg" alt="imdb-logo" />
            </a>
            <div className="imdb-rating">
              <meter classname='flex mb-28'
                min="0"
                max="100"
                optimum="100"
                low="40"
                high="70"
                value={vote_average * 10}
              />

              <p className="flex mb-24 ">{vote_average}</p>
            </div>
            {length > 1 ? <h3 className='flex mb-8'>DIRECTORS</h3> : <h3>DIRECTOR</h3>}{' '}
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

<div className="actor flex-col   ">

{actor.map( el=>
<div className="flex-row shadow shadow-2xl mx-20  w-80 mb-24 mt-24" key={el.id} >
  <img
    classname="flex "
    src={
      el.profile_path
        ? `${imageUrl}${posterAct}${el.profile_path}`
        : './images/no_image.jpg'
    }
    alt="actor/actress-photo"
  />
  <strong className="flex ml-24 text-center mb-6 text-white">{el.name}</strong>
  <span className="flex ml-24 text-center mb-6 text-white">Plays {el.character}</span>
</div>)}


</div>
</Fragment>
    );
  }
}

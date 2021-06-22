import React, { Component, Fragment } from 'react';
import { url, apiKey } from '../../configs';
import Nav from '../elements/Nav/Nav';
import MovieInfo from '../elements/MovieInfo/MovieInfo';
import MovieInfoConv from '../elements/MovieInfoConv/MovieInfoConv';
import SpinAnimation from '../elements/SpinAnimation/SpinAnimation';
import './Movie.css';

export default class Movie extends Component {
  constructor() {
    super();
    this.state = {
      movie: null,
      actors: null,
      directors: [],
      loading: false,
      stream: [],
      link: '',
    };
  }
  /* https://api.themoviedb.org/3/movie/{movie_id}/watch/providers?api_key=<<api_key>>*/

  componentDidMount() {
    if (localStorage.getItem(`${this.props.match.params.movieId}`)) {
      const state = JSON.parse(
        localStorage.getItem(`${this.props.match.params.movieId}`)
      );
      this.setState({ ...state });
    } else {
      this.setState({ loading: true });
      const endpoint = `${url}movie/${this.props.match.params.movieId}?api_key=${apiKey}&language=en-US`;
      this.fetchMovieData(endpoint);
    }
    if (this.state.stream !== null) {
      const opa = `${url}movie/${this.props.match.params.movieId}/watch/providers?api_key=${apiKey}&language=en-US`;
      this.fetchProviders(opa);
    }
  }

  /* In the future I pretend to implement the providers stream but in the moment 
  the api is lacking in fetching a specific movie withing a region and the local providers
  */

  fetchProviders = (endpoint) => {
    fetch(endpoint)
      .then((result) => result.json())
      .then((result) => {
        if (result === undefined) {
          return this.setState({ stream: result.results.CA });
        } else if (result.status_code) {
          this.setState({
            loading: false,
          });
        } else if (result.results.US.flatrate) {
          return this.setState({
            stream: result.results.US.flatrate[0],
            link: result.results.US.link,
          });
        } else if (result.results.US.rent) {
          return this.setState({
            stream: result.results.US.rent[0],
            link: result.results.US.link,
          });
        }
      })
      .catch((err) => {
        console.log('Error: ' + err);
      });
  };

  fetchMovieData = (endpoint) => {
    fetch(endpoint)
      .then((result) => result.json())
      .then((result) => {
        if (result.status_code) {
          this.setState({ loading: false });
        } else {
          this.setState(
            {
              movie: result,
            },
            () => {
              const endpoint_credit = `${url}movie/${this.props.match.params.movieId}/credits?api_key=${apiKey}&language=en-US`;
              fetch(endpoint_credit)
                .then((result) => result.json())
                .then((result) => {
                  const directors = result.crew.filter(
                    (member) => member.job === 'Director'
                  );
                  this.setState(
                    {
                      actors: result.cast,
                      directors,
                      loading: false,
                    },
                    () => {
                      localStorage.setItem(
                        `${this.props.match.params.movieId}`,
                        JSON.stringify(this.state)
                      );
                    }
                  );
                });
            }
          );
        }
      })
      .catch((error) => console.error('Error: ', error));
  };

  render() {
    const { logo_path, provider_name } = this.state.stream;

    return (
      <Fragment>
        
        <div className='flex flex-row'>
          {this.state.movie && this.state.actors ? (
            <div>
              <Nav movie={this.props.location.movieName} />
              <MovieInfo 
                movie={this.state.movie}
                directors={this.state.directors}
                imdb_id={this.state.imdb_id}
                actor={this.state.actors}
              />
            </div>
          ) : null}

          {this.state.stream.results !== undefined ? (
            <div>
              <span>Only in Theaters</span>
            </div>
          ) : (
            <div className='flex absolute provider '  >
              <a className='flex  ' href={this.state.link}>
                <img className='flex logo rounded-2xl absolute  hover  '
                  src={`https://www.themoviedb.org/t/p/original${logo_path}`}
                  alt={provider_name}
                />
                <span className='flex  py-20 text-white'>Watch on </span>
              </a>
            </div>
          )}
                  </div>


          {this.state.actors ? <div ></div> : null}
          {!this.state.actors && !this.state.loading ? (
            <h1>No Movie Found!</h1>
          ) : null}
          {this.state.loading ? <SpinAnimation /> : null}
      </Fragment>
    );
  }
}

import React, { Component } from 'react';
import { url, apiKey } from '../../configs';
import Nav from '../elements/Nav/Nav';
import MovieInfo from '../elements/MovieInfo/MovieInfo';
import MovieInfoConv from '../elements/MovieInfoConv/MovieInfoConv';
import SpinAnimation from '../elements/SpinAnimation/SpinAnimation';
import './Movie.css';
import List from '../elements/List/List';

export default class Movie extends Component {
  constructor() {
    super();
    this.state = {
      movie: null,
      actors: null,
      directors: [],
      loading: false,
      stream: {},
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
    const opa = `${url}movie/${this.props.match.params.movieId}/watch/providers?api_key=${apiKey}&language=en-US`;
    this.fetchProviders(opa);
  }
  
  /* In the future I pretend to implement the providers stream but in the moment 
  the api is lacking in fetching a specific movie withing a region and the local providers
  */

  fetchProviders = (endpoint) => {
    fetch(endpoint)
      .then((result) => result.json())
      .then((result) => {
        if (result.status_code) {
          this.setState({ loading: false });
        } else {
        this.setState({
          stream: result,
        });
      }});
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
    const { actors } =this.state;
    return (
      <div>
        {this.state.movie && actors ? (
          
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
{this.state.actors ? <div className="moviegrid">
            
</div> : null}
        {!this.state.actors && !this.state.loading ? (
          <h1>No Movie Found!</h1>
        ) : null}
        {this.state.loading ? <SpinAnimation /> : null}
      </div>
    );
  }
}

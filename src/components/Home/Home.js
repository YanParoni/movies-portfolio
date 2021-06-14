import React, {Component} from 'react';
import {
  apiKey,
  url,
  imageUrl,
  backImageSize,
  poster
} from '../../configs';
import HeroImg from "../elements/HeroImg/HeroImg";
import SearchBar from "../elements/SearchBar/SearchBar";
import Thumbnail from "../elements/Thumbnail/Thumbnail";
import LoadBtn from "../elements/LoadBtn/LoadBtn";
import List from "../elements/List/List";
import SpinAnimation from "../elements/SpinAnimation/SpinAnimation";

class Home extends Component {
  state = {
    movies: [],
    heroImage: null,
    loading: false,
    currentPage: 0,
    totalPages: 0,
    searchTerm: "",
    progress:0,
    rating:0,
    vote:0
  };

  componentDidMount() {
    this.setState({ loading: true });
    const endpoint = `${url}movie/popular?api_key=${apiKey}&language=en-US&page=1`;
    this.fetchItems(endpoint);
  }

  searchItems = searchTerm => {
    console.log(searchTerm);
    let endpoint = "";
    this.setState({
      movies: [],
      loading: true,
      searchTerm
    });

    if (searchTerm === "") {
      endpoint = `${url}movie/popular?api_key=${apiKey}&language=en-US&page=1`;
    } else {
      endpoint = `${url}search/movie?api_key=${apiKey}&language=en-US&query=${searchTerm}`;
    }
    this.fetchItems(endpoint);
  };

  loadMoreItems = () => {
    let endpoint = "";
    this.setState({
      loading: true
    });

    if (this.state.searchTerm === "") {
      endpoint = `${url}movie/popular?api_key=${apiKey}&language=en-US&page=${this
        .state.currentPage + 1}`;
    } else {
      endpoint = `${url}search/movie?api_key=${apiKey}&language=en-US&query${
        this.state.searchTerm
      }$page=${this.state.currentPage + 1}`;
    }
    this.fetchItems(endpoint);
  };

  fetchItems = endpoint => {
    fetch(endpoint)
      .then(result => result.json())
      .then(result => {
        this.setState({
          movies: [...this.state.movies, ...result.results],
          heroImage: this.state.heroImage || result.results[0],
          loading: false,
          currentPage: result.page,
          totalPages: result.total_pages,
          rating:result.vote_average,
          vote:result.vote_count

        });
      });
      console.log(this.state.progress)

  };

  render() {
    return (
      <div >
        {this.state.heroImage ? (
          <div>
            <HeroImg
              image={`${imageUrl}${backImageSize}${
                this.state.heroImage.backdrop_path
              }`}
              title={this.state.heroImage.original_title}
              text={this.state.heroImage.overview}
            />
            <SearchBar callback={this.searchItems} />
          </div>
        ) : null}
         
        <div >
          <List
            header={this.state.searchTerm ? "Search Result" : "Trend Movies"}
            loading={this.state.loading}
          >
            {this.state.movies.map((element) => {
              return (
                <Thumbnail
                  key={element.id}
                  clickable={true}
                  image={
                    element.poster_path
                      ? `${imageUrl}/w300/${element.poster_path}`
                      : "./images/no_image.jpg"
                  }
                  movieId={element.id}
                  rating={element.vote_average}
                  movieName={element.original_title}
                  vote={element.vote_count}
                />
              );
          })}
          </List>
        
          
          {this.state.loading ? <SpinAnimation /> : null}
          {this.state.currentPage <= this.state.totalPages &&
          !this.state.loading ? (
            <LoadBtn text="Load More" onClick={this.loadMoreItems} />
          ) : null}
        </div>
      </div>
    );
  }
}

export default Home;
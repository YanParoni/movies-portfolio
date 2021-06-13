import React, { Component } from 'react';
import { url, apiKey} from '../../../configs';

export default class Stream extends Component {
  constructor(props){
    super(props)
    this.state ={
    
    }
  }
  
/* https://api.themoviedb.org/3/movie/{movie_id}/watch/providers?api_key=<<api_key>>*/
  componentDidMount() 
  

  fetchMovieData = endpoint => {
    fetch(endpoint)
      .then(result => result.json())
      .then(result => {
        this.setState({
            link:result.link,
            logo_path:result.logo_path,
            provider_name:result.provider_name
          });   
  });
}




  render(){
    return(
      <div>
         <img src={this.state.logo_path} />
      </div>
    )
  }
}
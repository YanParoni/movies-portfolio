import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../elements/Header/Header";
import Home from "../Home/Home";
import Movie from "../Movie/Movie.js";
import NotFound from "../elements/NotFound/NotFound";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/:movieId" component={ Movie }  />
            <Route component={ NotFound } />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
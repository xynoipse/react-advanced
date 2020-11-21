import React, { Component } from 'react';
import MovieList from './MovieList';
import MovieRow from './MovieRow';

class MoviePage extends Component {
  render() {
    return (
      <React.Fragment>
        <MovieList />
        <MovieRow />
      </React.Fragment>
    );
  }
}

export default MoviePage;

import React from 'react'
import { connect } from 'react-redux'

import SearchMovies from '../search-movies';

import './_style.css'
import Movie from './movie';

const ViewMovies = ({ searchKey, movieList }) => {
  return (
    <div className="view-movies">
      <header className="view-movie__header">
        <SearchMovies />
      </header>
      <main>
        <div>Movies are below movie list you searched for by key : {searchKey}</div>
        {movieList.map(movie => (
          <Movie movie={movie} key={movie.name}/>
        ))}
      </main>
    </div>
  )
}

const mapStateToProps = state => {
  const { searchKey, movieList} = state.movies

  return {
    searchKey,
    movieList,
  }
}

export default connect(mapStateToProps)(ViewMovies)

import React, { Component } from 'react'
import { connect } from 'react-redux'

import getMovies, { saveSearchKey } from '../../store/actions/index'

import './_style.css'


class SearchMovies extends Component {
  
  handleOnClick = (event) => {
    const { searchKey, saveSearchKey, getMovies } = this.props
    if (event) {
      event.preventDefault()
      saveSearchKey(event.target.value);
    }

    setTimeout(() => {
      getMovies(searchKey)
    }, 1000)

  }
  render() {
    const { searchKey } = this.props
    return (
      <form className="search-movies">
        <input
          className="search-movie__imput-text"
          type="text" placeholder="please enter movie name..."
          value={searchKey}
          onChange={this.handleOnClick}
        />
        <button className="search-movies__button" onClick={this.handleOnClick}>S</button>
      </form>
    )
  }
}

const actions = {
    saveSearchKey,
    getMovies,
}

const mapStateToProps = state => {
  const searchKey = state.movies.searchKey
  return {
    searchKey,
  }
}

export default connect(mapStateToProps, actions)(SearchMovies)

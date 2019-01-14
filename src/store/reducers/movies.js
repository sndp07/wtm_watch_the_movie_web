import actions from '../actions/constant'

const initialState = {
  searchKey: '',
  searchStatus: '',
  movieList: [],
}
const movies = (state = initialState, action) => {

  switch (action.type) {
    case actions.SAVE_NAME:
      return {
        ...state,
        searchKey: action.searchKey,
      }
    case actions.MOVIE_REQUEST_START:
    return {
      ...state,
      searchStatus: 'searching'
    }
    case actions.MOVIE_REQUEST_SUCCESS:
    return {
      ...state,
      searchStatus: 'success',
      movieList: action.movieList,
    }
    case actions.MOVIE_REQUEST_FAIL:
    return {
      ...state,
      searchStatus: 'failed'
    }
    default:
      return state
  }
}

export default movies

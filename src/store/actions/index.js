import actions from '../actions/constant'

const requestStart = () => ({
  type: actions.MOVIE_REQUEST_START,
  status: 'START'
})

const requestSuccess = (filteredList) => ({
  type: actions.MOVIE_REQUEST_SUCCESS,
  status: 'SUCCESS',
  movieList: filteredList
})

const requestFail = () => ({
  type: actions.MOVIE_REQUEST_FAIL,
  status: 'FAIL'
})

const getMovies = () => (dispatch, getstate) => {

  dispatch(requestStart())
  const { searchKey } = getstate().movies
  const url = `http://localhost:5000/movies?key=${searchKey}`

  fetch(url, {
    method: 'POST'
  }).then(res => {
    res.json().then(data => {
      dispatch(requestSuccess(data.filteredList))
    })
  }).catch(err => {
    dispatch(requestFail())
  })
}


const saveKey = (key) => (
  {
    type: actions.SAVE_NAME,
    searchKey: key,
  }
)

const saveSearchKey = (key) => dispatch => {
  dispatch(saveKey(key))
}

export {
  getMovies as default,
  saveSearchKey,
}
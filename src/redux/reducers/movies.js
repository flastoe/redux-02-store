import { MovieActions } from '../actions/movies';
const movies = (state = {
  listLoaded: false,
  error: undefined,
  list: [],
}, action) => {
  switch(action.type) {
    case MovieActions.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        listLoaded: true,
        list: action.data
      }
    default:
      return state;
  }
}

export default movies;
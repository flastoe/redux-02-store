const API = 'http://10.25.68.120:3000';

export const MovieActions = {
  'FETCH_MOVIES_SUCCESS': 'Movies.FETCH_MOVIES_SUCCESS',
  'FETCH_MOVIES_FAILURE': 'Movies.FETCH_MOVIES_FAILURE',
}

export const fetchMovies = async () => {
  try {
    const url = `${API}/movies`;
    const response = await fetch(url);
    const data = await response.json();
    console.log('Success:', data);
    return {
      type: MovieActions.FETCH_MOVIES_SUCCESS,
      data,
    }
  } catch (error) {
    console.log('Error', error);
    return {
      type: MovieActions.FETCH_MOVIES_FAILURE,
    }
  }
} 
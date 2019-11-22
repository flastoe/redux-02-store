import { createStore, combineReducers, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import counter from './reducers/counter';
import movies from './reducers/movies';

const storeFactory = () => {
  console.log('Creating store...');
  const middlewares = [promiseMiddleware];
  const reducers = combineReducers({
    counter,
    movies,
  });
  return createStore(reducers, applyMiddleware(...middlewares));
}

export default storeFactory;